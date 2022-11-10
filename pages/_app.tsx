import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import { QuizContext } from './components/Contexts'
import { useState } from 'react'

function MyApp({ Component, pageProps :{session,...pageProps}}: AppProps) {
  const [score,setScore] = useState(0)
  const [score1,setScore1] = useState(0)

  return ( 
  <SessionProvider session={session}>
    <RecoilRoot >
    <QuizContext.Provider value={{score,setScore,score1,setScore1}}>

     <Component {...pageProps} />
     </QuizContext.Provider>
    </RecoilRoot>
  </SessionProvider>
    )
}

export default MyApp
