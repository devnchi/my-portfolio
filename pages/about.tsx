import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'

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
      />
      <Footer />
    </div>
  )
}

export default About