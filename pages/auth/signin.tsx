import {getProviders ,signIn as signIntoProviders} from "next-auth/react";
import React from 'react';

//browser
function signIn({providers}) {
  return (
<>
       
       <div className="flex flex-col bg-gradient-to-b to-green-400 from-purple-500 via-white items-center justify-center min-h-screen py-2 -mt-5 px-14 text-center" >
           <div className=" bg-gradient-to-bl to-green-200 from-purple-300 via-pink-200 rounded-lg ">
           <h1 className="p-5 font-bold italic text-3xl">TREASURE HUNT - THE GAME</h1>
        {/*   <img className="w-60" 
           src="http://2.bp.blogspot.com/-4pBaE9sDqjg/UYNzlT_tL9I/AAAAAAAAZck/PhzqPJx3le8/s1600/Instragram+logo.png" alt="" />  */}
       <p className="font-xs italic " >
           This is " TREASURE HUNT - THE GAME " website  </p>
     {/*
           <div id="fields" >
       <input ref={emailRef} type="text" placeholder="Email" className="flex mt-5 mb-2 rounded-md"/>
       <input ref={passwordRef} type="password" placeholder="Password" className="flex mt-2 rounded-md" />
     </div>
 
     <button type="submit" className="p-1 mt-4 bg-blue-600 rounded-lg text-white" onClick={handleSignIn}>Sign In</button>
     <h2 className=" mt-5 mb-5">OR</h2>
  */}
      {/*Login with Google */}
       <div className="mt-30 mb-30">
         {Object.values(providers).map((provider)=> (
           <div key={provider.name}>
               <button className="p-3 bg-blue-700 mb-24 rounded-lg mt-14 text-white"
                onClick={() => signIntoProviders(provider.id,{ callbackUrl: "/" })}
                >
                   Sign in with {provider.name}
               </button>
 
           </div>
         ))}   
       </div>
       </div>
       
       </div>
       
       </>  );
}

 
// does server side rendering 
export async function getServerSideProps(){
    const providers = await getProviders();
    
    return {
        props: {
            providers
        }
    }
}
export default signIn;