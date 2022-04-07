import React from 'react'
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import ProjectButtons from '../../components/ProjectButtons';
import ProjectImage from '../../components/ProjectImage';

type Props = {}

function Airbnb({}: Props) {
  return (
    <div>
        <Navbar />
        <PageHeader
            pageTitle='Airbnb Clone'
            projectDescription='This Airbnb iteration was built with a focus on front-end look and functionality. In this build, you can dynamically search for bookings by date and location. The data that is being rendered for each search is a result of hard-coded data.'
            projectTech='Built with: Next.js, Typescript, TailwindCSS, Figma'
        />
        <div className='bg-black mt-12 pt-12'>
            <ProjectImage
                img='/bnb00.png'
            />
            <ProjectImage
                img='/bnb01.png'
            />
            <ProjectImage
                img='/bnb02.png'
            /> 
            <ProjectImage
                img='/bnb03.png'
            />           
        </div>
        <ProjectButtons
            siteLink='https://airbnb-clone-devnchi.vercel.app/'
            gitLink='https://github.com/devnchi/airbnb-2.0'
        />
        <Footer />
    </div>
  )
}

export default Airbnb