import router from 'next/router';
import React, { useContext } from 'react'
import {QuizContext} from "./Contexts";
import { Questions } from '../components/game1helpers/QsnBank1';

function EndScreen1() {

  const {score} = useContext(QuizContext);  


  function f3(){
     if(score>=30){
     router.push('../levels/medium')
      }
      else{
        alert("you are not eligible to switch to next level")
      }
    }



  return (
    <div className='flex justify-center items-center'>
      <div className=' bg-green-200 h-64 w-72 mt-24 border-3 rounded-lg'>
        <div>
        {/* <h1 className=' text-black mt-5 justify-center  flex'>End of Game 1</h1><br/> */}
        <h1 className='justify-center text-xl font-extrabold flex mt-8'>{score}/{5*(Questions.length)}</h1>
        </div>

        <div  className='justify-center ml-10 rounded-lg border-2 w-52 bg-blue-600 flex mt-16'>
          <button onClick={f3}>switch to next level</button></div>

        <div  className='justify-center ml-10 rounded-lg border-2 w-52 bg-blue-600 flex mt-16'>
          <button onClick={() => router.push('../../')}>back to homepage</button></div>
    </div>
    </div>

  )
}

export default EndScreen1