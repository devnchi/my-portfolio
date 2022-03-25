import Head from 'next/head'
import React from 'react'
import Typewriter from 'typewriter-effect'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='items-center justify-center mx-auto m-5'>
      <Head>
        <title>Contact - Chi Igbokwe</title>
        <link rel="icon" href="/chi_igbokwe_logo.png" />
      </Head>
      
      <Navbar />
      <PageHeader
        pageTitle='Contact Chi'
        projectDescription=''
        projectTech=''
      />
      <div className='bg-black min-h-screen relative'>
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
        <div className='font-comforterBrush relative block container items-center text-center justify-center lg:flex lg:text-justify lg:justify-evenly lg:max-w-8xl lg:mx-auto lg:mt-0'>
          <form name='contact' method='POST' data-netlify='true' className='text-center border-2 p-5 items-center justify-center mx-auto'>
            <input type='hidden' name='for-name' value='contact'/>
            <p className='p-2'>
              <label className='text-white mr-6 text-5xl' htmlFor='name'>Name</label>
              <input className='p-2 font-spaceMono w-full text-2xl' type='text' id='name' name='name' />
            </p>
            <p className='p-2'>
            <label className='text-white mr-5 text-5xl' htmlFor='email'>Email</label>
            <input className='p-2 font-spaceMono w-full text-2xl' type='text' id='email' name='email' />
            </p>
            <p className='p-2'>
            <label className='text-white mr-3 text-5xl' htmlFor='message'>Message</label>
            <textarea className='w-full h-48 mt-2 text-2xl p-5 font-spaceMono' id='message' name='message'></textarea>
            </p>
            <p className='items-center justify-center p-3 font-comforterBrush'>
              <button className='bg-purple-400 rounded-xl text-3xl text-white font-comforterBrush items-center justify-center p-5 hover:bg-gray-400 cursor-pointer' type='submit'>Send</button>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact