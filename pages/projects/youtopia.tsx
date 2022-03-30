import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import ProjectButtons from '../../components/ProjectButtons'
import ProjectImage from '../../components/ProjectImage'

type Props = {}

function YouTopia({}: Props) {
  return (
    <div>
        <Navbar />
        <PageHeader
            pageTitle='Airbnb Clone'
            projectDescription='This Airbnb iteration was built with a focus on front end functionality. You are able to dynamically search for bookings by date and location. The data that is rendered for each search is a result of hard coded data'
            projectTech='Built with: Javascript, MongoDB, Express, REST APIs, Passport.js, Illustrator'
        />
        <div className='bg-black mt-12 pt-12'>
            <ProjectImage
                img='/yt01.png'
            />
            <ProjectImage
                img='/yt04.png'
            />
            <ProjectImage
                img='/yt07.png'
            />       
        </div>
        <ProjectButtons
            siteLink='https://youtopia-mvp.herokuapp.com/'
            gitLink='https://github.com/devnchi/youTopiaDemo'
        />
        <Footer />
    </div>
  )
}

export default YouTopia