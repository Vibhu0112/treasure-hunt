import { useSession } from 'next-auth/react';
import router from 'next/router';
import React, { useContext, useState } from 'react'
import { QuizContext } from '../pages/game1/Helpers/Contexts';
import gameApp from '../pages/game1/gameApp';

function Content() {
  const{data: session } = useSession();
  //const { score,setScore,setGameState} = useContext(QuizContext);  
  const [foundPairs,setFoundPairs] = useState([])


function al1(){
  alert("please login first")
}


//() => router.push('/levels/medium')
// () => router.push('/levels/hard')

  return (
    <div>
      {session ? (
      <div className=" bg-green-400 border-slate-900 mx-24 my-12 mt-36  border rounded-md">
    <div className="flex justify-center mt-4">
   <div className="rounded-full border-x-8">Difficulty Level</div><br/>
   </div>
   
   
   <div className="flex justify-center mt-14">
   <div className="rounded-full  mx-10 border-x-8 cursor-pointer" onClick={() => router.push('/levels/easy')}>Easy</div><br/>
   </div>

   <div className="flex justify-center mt-14">
   <div className="rounded-full border-x-8 cursor-pointer" >Medium</div><br/>
   </div>

   <div className="flex justify-center mb-8 mt-14">
   <div className="rounded-full border-x-8 cursor-pointer" >Hard</div><br/>
   </div>
    </div>
    ):(
    <div className=" bg-green-400 border-slate-900 mx-24 my-12 mt-36  border rounded-md">
    <div className="flex justify-center mt-4">
   <div className="rounded-full border-x-8">Difficulty Level</div><br/>
   </div>
   
   
   <div className="flex justify-center mt-14">
   <div className="rounded-full  mx-10 border-x-8 cursor-pointer" onClick={al1}>Easy</div><br/>
   </div>

   <div className="flex justify-center mt-14">
   <div className="rounded-full border-x-8 cursor-pointer" onClick={al1}>Medium</div><br/>
   </div>

   <div className="flex justify-center mb-8 mt-14">
   <div className="rounded-full border-x-8 cursor-pointer" onClick={al1}>Hard</div><br/>
   </div>
    </div>

    )}
    
    
    </div>


  )
}

export default Content