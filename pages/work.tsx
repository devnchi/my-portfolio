import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import WorkCard from '../components/WorkCard'

type Props = {}

function Work({}: Props) {
  return (
    <div className=''>
      <Head>
        <title>Work - Chi Igbokwe</title>
        <link rel="icon" href="/chi_igbokwe_logo.png" />
      </Head>
      
      <Navbar />
      <PageHeader
        pageTitle='Work'
        projectDescription=''
        projectTech=''
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-6 bg-black text-white py-20'>
        <a href='/projects/opensea'><WorkCard
          img='/os01.png'
          title='Opensea Clone'
          description='A full stack iteration of Opensea with real Bored Ape Yatch Club NFTs using Web3.0'
        /></a>
        <a href="/projects/cryptoWallet"><WorkCard
          img='/chi_igbokwe_logo.png'
          title='Decent Demo'
          description='A demo of a personal project I am currently building for a cryptocurrency wallet and trading application using Web 3.0'
        /></a>
        <a href="/projects/createdByChi"><WorkCard
          img='/cxc00.png'
          title="Created By Chi"
          description='A personal project I am building to blog and share creative tech ideas and resources for the public'
        /></a>
        <a href="/projects/airbnb"><WorkCard
          img='/bnb00.png'
          title='Airbnb Clone'
          description="A redesign and front end iteration of Airbnb"
        /></a>
        <a href="/projects/nftCollection"><WorkCard
          img='/nft00.png'
          title='NFT Collection'
          description='A full stack iteration and design for an NFT collection project using Web3.0'
        /></a>
        <a href="/projects/hulu"><WorkCard
          img='/hulu00.png'
          title='Hulu Clone'
          description='A redesign and front end iteration of Hulu'
        /></a>
        <a href="/projects/qruznDemo"><WorkCard
          img='/qruzn00.png'
          title='Qruzn Demo'
          description='A demo of a personal project I am currently building for a car rental service application'
        /></a>
        <a href="/projects/youtopia"><WorkCard
          img='/yt00.png'
          title='YouTopia Demo'
          description='A personal project I built for a full stack iteration of a very unique social media experience'
        /></a>
      </div>
      <Footer />
    </div>
  )
}

export default Work