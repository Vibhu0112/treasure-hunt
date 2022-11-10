import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Modal from '../components/Modal'


const Home: NextPage = () => {
  return (
    <div className=" bg-yellow-50 font-serif font-bold">
      <Head>
        <title>Treasure Hunt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {/*header */}
       <Header />


       {/* modal */}
      {/* <Modal />*/}
       
       {/* content */}
       <Content />

       {/*footer */}
       <Footer />
          </div>
  )
}

export default Home
