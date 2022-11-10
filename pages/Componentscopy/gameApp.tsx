//import { Router } from 'next/router'
import React, { useState,useContext } from 'react'
import EndScreen1 from './endScreen1';
import Game1 from './game1';
import {QuizContext} from "./Contexts";
import EndScreen3 from './endScreen3';
import Game2 from './game2App';
import Game3 from './game3';

function GameApp() {

   const [gameState,setGameState] = useState("game1");
   const [score,setScore] = useState(0)
   const [score1,setScore1] = useState(0)

  return (
     <div>
      <h1 className='text-center mt-7 text-red-800'>T-Hunt - The Game</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,score1,setScore1}}>
        {gameState === "game1" && <Game1/>}
        {gameState === "endScreen1" && <EndScreen1/>}
        {gameState === "game2" && <Game2/>}
        {gameState === "game3" && <Game3/>}
        {gameState === "endScreen3" && <EndScreen3/>}
        </QuizContext.Provider>
     </div>
     )
}

export default GameApp