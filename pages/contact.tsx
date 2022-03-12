import Head from 'next/head'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

type Props = {}

function Contact({}: Props) {
  return (
    <div>
      <Head>
        <title>Contact - Chi Igbokwe</title>
        <link rel="icon" href="/chi_igbokwe_logo.png" />
      </Head>
      
      <Navbar />
      <PageHeader
        pageTitle='Contact Chi'
      />
      <div className='bg-black min-h-screen'>
        <div className='mx-auto max-w-7xl text-white text-5xl font-spaceMono font-bold py-20 mb-5'>
          <Typewriter
            onInit={(typewriter)=> {       
              typewriter          
                .typeString('Want to work with me? ')          
                .pauseFor(1000)
                .typeString(' Get in contact with me now...')
                .start();
              }}
            />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact