//import { Router } from 'next/router'
import React, { useState,useContext } from 'react'
import EndScreen from './endScreen3';
import Game3 from './game3';
import {QuizContext} from "../components/Contexts";
import Lb from './lb';
import Header from '../../components/Header';

function GameApp() {

   const [gameState,setGameState] = useState("quiz");
   const [score1,setScore1] = useState(0)
   const [score,setScore] = useState();  
   // const [lb,setLb] = useState()

  return (
     <div>
      <Header />

      <h1 className='text-center mt-7 text-red-800'>Game for Hard difficulty level</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,score1,setScore1}}>
        {gameState === "quiz" && <Game3/>}
        {gameState === "endScreen" && <EndScreen/>}
        {/* {gameState === "lb" && <Lb/>} */}
        </QuizContext.Provider>
     </div>
     )
}

export default GameApp