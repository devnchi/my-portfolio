import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import ProjectButtons from '../../components/ProjectButtons'
import ProjectImage from '../../components/ProjectImage'

type Props = {}

function opensea({}: Props) {
  return (
    <div>
        <Navbar />
        <PageHeader
            pageTitle='Opensea Clone'
            projectDescription='This Airbnb iteration was built with a focus on front end functionality. You are able to dynamically search for bookings by date and location. The data that is rendered for each search is a result of hard coded data'
            projectTech='Built with: Next.js, Typescript, Thirdweb, TailwindCSS'
        />
        <div className='bg-black mt-12 pt-12'>
            <ProjectImage
                img='/os00.png'
            />
            <ProjectImage
                img='/os01.png'
            />
            <ProjectImage
                img='/os02.png'
            />
            <ProjectImage
                img='/os03.png'
            />         
        </div>
        <ProjectButtons
            siteLink='https://opensea-web3-0-createdbychi.vercel.app/'
            gitLink='https://github.com/devnchi/opensea-clone-web3.0' 
        />
        <Footer />
    </div>
  )
}

export default opensea