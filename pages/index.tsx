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
        <title>Chi Igbokwe</title>
        <link rel="icon" href="/chi_igbokwe_logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <HighlightCard
        img='/chi_igbokwe_logo.png'
        title='Spotify Remote'
        description='Wishlists curated by Airbnb'
        buttonText='See Full Project'
      />
      <HighlightCard
        img='/chi_igbokwe_logo.png'
        title='Airbnb Redesign'
        description='Wishlists curated by Airbnb'
        buttonText='See Full Project'
      />
      <HighlightCard
        img='/chi_igbokwe_logo.png'
        title="Queen's Qloset"
        description='Wishlists curated by Airbnb'
        buttonText='See Full Project'
      />
      <div className='flex items-center justify-center'>
        <a href='/work'><button className='rounded-xl text-4xl bg-black text-white font-comforterBrush flex items-center justify-center p-8 m-10 hover:bg-gray-400 cursor-pointer'>See More Work</button></a>
      </div>
      <Footer />
    </div>
  )
}

export default Home
