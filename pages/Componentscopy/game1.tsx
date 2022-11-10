import router from 'next/router';
import React, { useContext, useState } from 'react'
import{ Questions } from './game1helpers/QsnBank1'
import {QuizContext} from "./Contexts";
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase"
import { useSession } from 'next-auth/react';


function Game1() {
  
  const{data: session}= useSession();
  const { score,setScore,setGameState} = useContext(QuizContext);  
  const [currQsn,setCurrQsn] = useState(0);
  const [optChosen,setOptChosen] = useState("");

  const nextQsn = () =>{

     if(Questions[currQsn].answer == optChosen){
        setScore(score+5);
        
     }
      
    setCurrQsn(currQsn+1)

  }

  const finishQuiz =() =>{
    if(Questions[currQsn].answer == optChosen){
        setScore(score+5);
     }
  //    addDoc(collection(db,'board'),{
  //     score: score+5,
  //     username: session.user.username,
  //     userImage: session.user.image,
  //     timestamp: serverTimestamp(),
  // })
    setGameState("endScreen1")
    console.log(score)

  }

  return (
    <div className=' font-serif flex  items-center justify-center '>
       <div className=' bg-slate-300 h-max w-96 mt-8 border-3 rounded-lg'>
       <div>
      <img className=' h-40 w-96' src={Questions[currQsn].img} alt="" />
      </div>
       <div className='bg-green-200'>
        <h1 className='  ml-3 h-14 w-70 mb-5'>{Questions[currQsn].prompt}</h1>
        </div>
        <div className=' bg-slate-100 w-72 ml-12'>
            <ul>
        <li><button className=' border-2 p-2 rounded-lg w-72 ' onClick={() => setOptChosen("A")}>A.{Questions[currQsn].optionA}</button></li>
        <li><button className=' border-2 p-2 w-72 rounded-lg ' onClick={() => setOptChosen("B")}>B.{Questions[currQsn].optionB}</button></li>    
        <li><button className=' border-2 p-2 rounded-lg w-72 ' onClick={() => setOptChosen("C")}>C.{Questions[currQsn].optionC}</button></li>    
        <li><button className=' border-2 p-2 rounded-lg w-72 ' onClick={() => setOptChosen("D")}>D.{Questions[currQsn].optionD}</button></li>    
            </ul>
        </div>
        <div className=' ml-40 bg-blue-600 w-16 rounded-lg mt-9 flex justify-center '>
        {currQsn == Questions.length-1 ? (
            <button onClick={finishQuiz}>Finish Game</button>
        ):(
            <button onClick={nextQsn}>next</button>
        )}
        </div>
        <div  className='justify-center ml-24 rounded-lg border-2 w-52 bg-blue-600 flex mt-8 mb-4'>
          <button onClick={() => router.push('../../')}>back to homepage</button></div>
        </div>
        </div>
  )
}

export default Game1