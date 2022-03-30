import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Typewriter from 'typewriter-effect'


type Props = {}

function About({}: Props) {
  return (
    <div>
      <Head>
        <title>About - Chi Igbokwe</title>
        <link rel="icon" href="/chi_igbokwe_logo.png" />
      </Head>
      
      <Navbar />
      <PageHeader
        pageTitle='About Chi'
        projectDescription=''
        projectTech=''
      />
      <div className='bg-black p-20 mx-auto'>
        <div className='text-white mx-auto text-4xl md:text-6xl p-10 font-spaceMono md:ml-12'>
          <Typewriter
              onInit={(typewriter)=> {       
                typewriter          
                  .typeString('Who is Chi Igbokwe? ')          
                  .pauseFor(1000)
                  .typeString("What's her story?...")
                  .start();
                }}
              />
        </div>
        <div className='text-white md:text-xl font-spaceMono mx-auto md:p-16'>
          <p className='p-4'>Chi Igbokwe is a designer and software engineer with a background in art, graphic design, product design, and marketing. Chi has always had a love for the creative arts since childhood and developed a deep interest in science and technology during her high-school education at Boston Latin Academy. Chi studied physics and mechanical engineering at St. John’s University and Boston University. In 2015, Chi founded a brand agency now known as Qreative Agency.</p>
          <p className='p-4'>Chi was born and raised in Boston, Massachusetts to Nigerian-immigrant parents that instilled in her the values of education and hard work. She is passionate about life-long learning, creating innovative and impactful technology that benefits her community and the world in a positive way, and about creating spaces where art and technology can come together and build things that propel us into the future. She is determined to use her unique skills to help more creative people and also, more black and brown people, get into the field of technology.</p>
          <p className='p-4'>Chi recently worked as an Associate Software Engineer at Corvus Insurance. With the desire to improve on her skills and work on more intersting projects, she is actively doing freelance work as a developer, designer and creative consultant through her business Qreative Agency.</p>
          <p className='p-4 text-2xl font-bold'>Chi's interests include:</p>
          <span className='font-comforterBrush text-4xl md:text-5xl mx-auto md:ml-4'>e-commerce, web3.0, music, fashion, design, marketing, media, and finance</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About