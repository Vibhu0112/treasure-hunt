import router from 'next/router';
import React, { useContext } from 'react'
import { QuizContext } from './Contexts'
import { Questions } from './game1helpers/QsnBank1';
import {Riddles} from './game3helpers/Riddles'

function EndScreen3() {

  const { score1,setScore1,setGameState} = useContext(QuizContext);

  const {score} = useContext(QuizContext);  

  

  console.log(score)
  return (
    <div className='flex justify-center items-center'>
      <div className=' bg-green-200 h-96 w-80 mt-24 border-3 rounded-lg'>
        <div>
        <h1 className=' text-black mt-5 justify-center  flex'>End of Game</h1><br/>
        <h1 className='justify-center text-xl font-extrabold flex mt-16'>easy level score :{score}/{5*(Questions.length)}</h1>
        <h1 className='justify-center text-xl font-extrabold flex mt-16'>hard level score :{score1}/{10*(Riddles.length)}</h1>

        </div>

        <div  className='justify-center ml-14 rounded-lg border-2 w-52 bg-blue-600 flex mt-24'>
        {/* <button onClick={f1}>view leaderboard</button></div> */}
          <button onClick={() => router.push('../../')}>back to homepage</button></div>
    </div>
    </div>
  )
}

export default EndScreen3