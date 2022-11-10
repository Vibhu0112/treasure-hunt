import router from 'next/router';
import React, { useContext, useState } from 'react'
import{ Riddles } from '../components/game3helpers/Riddles'
import { QuizContext } from '../components/Contexts';
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"
import { useSession } from 'next-auth/react';

function Game3() {
  
  const{data: session}= useSession();
  const { score1,setScore1,setGameState} = useContext(QuizContext);
  const {score,setScore} = useContext(QuizContext);    
  const [currQsn,setCurrQsn] = useState(0);
  const [ans,setAns] = useState("");
  const [input,setInput] = useState([])

  const nextQsn = () =>{

     if(Riddles[currQsn].answer == ans || Riddles[currQsn].Answer == ans){
        setScore1(score1+1);
        setCurrQsn(currQsn+1)
     }
     else{
        alert("wrong answer");
    } 
  }

  const finishQuiz =() =>{
    if(Riddles[currQsn].answer == ans){
        setScore1(score1+1);
        setScore(score);

      //    updateDoc(collection(db,'board'),{
      //     score: score+score1+1,
      //     username: session.user.username,
      //     userImage: session.user.image,
      //     timestamp: serverTimestamp(),
      // })
      
      setGameState("endScreen")

     }else{
        alert("wrong answer");
    }
    
  }


  const handleChange = e => {
    setAns(e.target.value)
  }


  return (
    <div className=' font-serif flex  items-center justify-center '>
       <div className=' bg-slate-300 h-96 w-96 mt-24 border-3 rounded-lg'>
        <div className='bg-green-200 h-14'>
        <h1 className=' ml-3 w-70 mb-5'>{Riddles[currQsn].prompt}</h1>
        </div>
        <div className=' bg-slate-300 mt-12 w-56 ml-16'>
        <label className=' ml-10'>Answer of Riddle : <input className=' ml-8'
        type="text" value={ans} onChange={handleChange}/></label>
            
        </div>
        <div className=' ml-40 bg-blue-600 w-16 rounded-lg mt-9 flex justify-center '>
        {currQsn == Riddles.length-1 ? (
            <button onClick={finishQuiz}>Finish Game</button>
        ):(
            <button onClick={nextQsn}>next</button>
        )}
        </div>
        <div  className='justify-center ml-20 rounded-lg border-2 w-52 bg-blue-600 flex mt-12'>
          <button onClick={() => router.push('../../')}>back to homepage</button></div>
        </div>
        </div>
  )
}

export default Game3