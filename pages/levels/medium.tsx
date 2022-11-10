import router from 'next/router'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'


function medium() {



  return (
    <div className=" bg-yellow-50 font-serif font-bold">
    <>
    <Header />
    <div className=" bg-pink-200 border-slate-900 mx-36 my-12 mt-36 mb-44 border rounded-md">
    <h1 className=' ml-3 text-amber-900 font-semibold'>click start to play game in medium level</h1>

    <div className="flex mt-32 mb-32 justify-center items-end">
        <button className="flex items-end rounded-full font-bold mx-12
         border-x-8 border-y-4 cursor-pointer" onClick={() => router.push('/Componentscopy/gameApp')}>Start</button>
    </div>

    </div>
    <Footer />
  </>  
  </div>
  )
}

export default medium