import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HighlightCard from '../components/HighlightCard'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='sticky'>
      <Head>
        <title>Chi Igbokwe - Official Portfolio</title>
        <link rel="icon" href="/chi_igbokwe_logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <HighlightCard
        img='/os00.png'
        title='Opensea Clone'
        description='A full stack reiteration of Opensea with built with Web 3.0 functionality'
        buttonText='See Full Project'
        buttonLink='/projects/opensea'
      />
      <HighlightCard
        img='/bnb00.png'
        title='Airbnb Clone'
        description='A front end reiteration of Airbnb built with Next.js and Typescript'
        buttonText='See Full Project'
        buttonLink='/projects/airbnb'
      />
      <HighlightCard
        img='/yt02.png'
        title="YouTopia"
        description='A full stack iteration of my unique and original social media applicationn built with basic Javascript'
        buttonText='See Full Project'
        buttonLink='/projects/youtopia'
      />
      <div className='flex items-center justify-center'>
        <a href='/work'><button className='rounded-xl p-4 mt-5 text-4xl bg-black text-white font-comforterBrush flex items-center justify-center md:p-6 md:m-10 hover:bg-purple-400 cursor-pointer'>See More Work</button></a>
      </div>
      <Footer />
    </div>
  )
}

export default Home
