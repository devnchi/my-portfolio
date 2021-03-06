import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import ProjectButtons from '../../components/ProjectButtons'
import ProjectImage from '../../components/ProjectImage'

type Props = {}

function cryptoWallet({}: Props) {
  return (
    <div>
        <Navbar />
        <PageHeader
            pageTitle='Airbnb Clone'
            projectDescription='This Airbnb iteration was built with a focus on front end functionality. You are able to dynamically search for bookings by date and location. The data that is rendered for each search is a result of hard coded data'
            projectTech='Built with: Next.js, TailwindCSS'
        />
        <div className='bg-black mt-12 pt-12'>
            <ProjectImage
                img='/chi_igbokwe_logo.png'
            />
            <ProjectImage
                img='/chi_igbokwe_logo.png'
            />
            <ProjectImage
                img='/chi_igbokwe_logo.png'
            />       
        </div>
        <ProjectButtons
             siteLink='airbnb-clone-devnchi.vercel.app'
             gitLink='https://github.com/devnchi/airbnb-2.0'       
        />
        <Footer />
    </div>
  )
}

export default cryptoWallet