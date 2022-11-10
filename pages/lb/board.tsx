import React, { useContext, useEffect, useState } from 'react'
import { addDoc, collection, getDocs, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useSession } from 'next-auth/react';
import {db, storage} from "../../firebase"
import { QuizContext } from '../components/Contexts';
import { ref, uploadString } from 'firebase/storage';

function Board() {

    const{data: session}= useSession();
    const [board,setBoard] = useState([])
    const [boards,setBoards] = useState([])
    //const {score1} = useContext(QuizContext);  
    
    const boardCollectionRef = collection(db , "board")


    useEffect(() => {
      const getBoard = async ()=>{
          const data = await getDocs(query(boardCollectionRef,orderBy('score','desc')))
          setBoard(data.docs.map((doc) => ({...doc.data(), id: doc.id })) )
        };

      getBoard();
    },[])

  
   
  return (
    <div>
     {""}
      {board.map((boards)=> {
        return(
          <div>
            
          <div className=' flex mt-5 items-center justify-center'>
            <img className="h-7  rounded-full" src={boards.userImage} alt="" /><br/>
            <h1 className=' ml-2 '>{boards.username}</h1>
            <h1 className=" ml-56 mr-9">{boards.score}</h1>
          </div>
          </div>
        )
      })}      
        {/* {boards.map(board => (
        <Board key={board.id}
        id={board.id}
        username={board.data().username}
        userImg={board.data().profileImg}
        score={board.data().score1}
        />))} */}
    </div>
  )
}

export default Board

function between(data,between){
  // const today = new Date();
  // const previous = new Date(today);
  // previous.setDate(previous.getDate() - (between + 1));

  let filter = data.filter(val => {
      let userDate = new Date(val.dt);
      if (between == 0) return val;
      return previous <= userDate && today >= userDate;
  })

  // sort with asending order
  return filter.sort((a, b) => {
      if ( a.score === b.score){
          return b.score - a.score;
      } else{
          return b.score - a.score;
      }
  })

}
