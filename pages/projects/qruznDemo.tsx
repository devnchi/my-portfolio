import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PageHeader from '../../components/PageHeader';
import ProjectButtons from '../../components/ProjectButtons';
import ProjectImage from '../../components/ProjectImage';
import qruzn from './qruznDemo';

type Props = {}

function qruznDemo({}: Props) {
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
                img='/qruzn00.png'
            />
            <ProjectImage
                img='/qruzn02.png'
            />     
        </div>
        <ProjectButtons
            siteLink=''
            gitLink=''
        />
        <Footer />
    </div>
  )
}

export default qruznDemo