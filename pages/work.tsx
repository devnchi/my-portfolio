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
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 p-6 bg-black text-white py-20'>
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Spotify Remote'
          description='A Spotify remote design and implementaion built with the Spotify API'
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Hulu Redesign'
          description='A redesign and front end implementation of Hulu'
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Airbnb Redesign'
          description="A redesign and front end implementation of Airbnb"
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title="Queen's Qloset"
          description='A personal project I am building for an e-commerce consignment store'
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='WhatsApp Clone'
          description='A front end re-implemetation of WhatsApp'
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Facebook Clone'
          description="A front end re-implementation of Facebook's web application"
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Uber Clone'
          description="A re-implementation of Uber's mobile application"
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Qruzn'
          description='A personal project I am building for a car rental service application'
        />
        <WorkCard
          img='/chi_igbokwe_logo.png'
          title='Cannabis Finder'
          description='A UI/UX design of a cannabis finder website'
        />
      </div>
      <Footer />
    </div>
  )
}

export default Work