import React from 'react'
import Header from '../../components/Header'
import Board from './board'

function Leaderboard() {
  return (
    <div>
      <Header/>
    <div className=' bg-gradient-to-b to-green-400 from-purple-500 via-white '>
     <div className=' flex items-center justify-center'>
      <h1 className='  font-extrabold text-2xl font-serif text-orange-400 '>Leaderboard</h1>
      </div>
        <div className=' flex items-center justify-center'>
              <h1 className=' ml-15 mr-5 text-lg font-semibold'>Username</h1>
              <h1 className=' ml-44 text-lg font-semibold'>Score</h1>
            </div>
            <Board />

    </div>
    </div>
  )
}

export default Leaderboard