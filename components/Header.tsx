import Image from 'next/image'
import React from 'react';
import {signIn,signOut,useSession} from "next-auth/react";
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';


function Header() {
    const {data : session} = useSession();
    const router = useRouter();

  return (
    <div className="shadow-sm border-b-2 bg-blue-600 sticky top-0 z-50">
        <div className="flex justify-between max-w-7xl">         
           {/*left */}
           <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
{/**
           <Image src=""
           layout="fill" objectFit="contain"
           />
 */}
            <h1 onClick={() => router.push('/')}> TREASURE-HUNT</h1>
            
            </div>
            
            
            <div className="relative h-5 w-5 justify-start lg:hidden flex-shrink-0 cursor-pointer">
{/**
           <Image src=""
           layout="fill" objectFit="contain"
           />
 */}
            <h1 onClick={() => router.push('/')}>T-HUNT</h1>

            
            </div>

            {/*right */}

            {session ? (
            <> 
            <div className="flex items-center justify-end space-x-4">
            <div className="relative hover:scale-125 ml-32 h-10 w-10 cursor-pointer"
            onClick={() => router.push('/lb/leaderboard')}>
            <Image src="https://cdn.onlinewebfonts.com/svg/img_155804.png"
            layout="fill" objectFit="contain"/>
            </div>

            <img 
            onClick={signOut}
            src={session.user.image}
             alt=" profile pic" className="h-10 hover:scale-125 cursor-pointer rounded-full"/>
            </div>
            </>
            ):(
              <button onClick={signIn}>Sign In</button>
            )}
            
            </div>
       
    </div>
  )
}

export default Header
