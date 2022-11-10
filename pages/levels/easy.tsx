import { useSession } from 'next-auth/react';
import router from 'next/router';
import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../../atoms/modalAtom';
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import Modal from '../../components/Modal'


function easy() {

  const{data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  
  return (
     <div className=" bg-yellow-50 font-serif font-bold">
        <>
          <Header />
          <div className=" bg-pink-200 border-slate-900 mx-36 my-12 mt-36 mb-44 border rounded-md">
          <h1 className=' ml-3 text-amber-900 font-semibold'>click start to start game</h1>

          <div className="flex mt-32 mb-32 justify-center items-end">
          <button className="flex items-end rounded-full font-bold mx-12
          border-x-8 border-y-4 cursor-pointer" onClick={() => router.push('/Componentscopy/gameApp')}>Start</button>
          </div>
          </div>
          <Modal />

          <Footer />
       </>
     
       </div>
  )
}

export default easy