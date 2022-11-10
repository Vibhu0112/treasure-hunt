//import { Router } from 'next/router'
import React, { useState,useContext } from 'react'
import EndScreen1 from '../components/endScreen1';
import Game1 from '../components/game1';
import {QuizContext} from "./Contexts";

function GameApp() {

   const [gameState,setGameState] = useState("quiz");
   const [score,setScore] = useState(0)

  return (
     <div>
      <h1 className='text-center mt-7 text-red-800'>Game for easy difficulty level</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        {gameState === "quiz" && <Game1/>}
        {gameState === "endScreen" && <EndScreen1/>}
        </QuizContext.Provider>
     </div>
     )
}

export default GameApp