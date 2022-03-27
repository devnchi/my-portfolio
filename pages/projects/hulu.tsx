import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import ProjectButtons from '../../components/ProjectButtons'
import ProjectImage from '../../components/ProjectImage'

type Props = {}

function hulu({}: Props) {
  return (
    <div>
        <Navbar />
        <PageHeader
            pageTitle='Hulu Clone'
            projectDescription='This Hulu iteration was built with a focus on front end functionality. Hulu finally redesigned their UI and I wanted to mimic the new design implementation but with a personal touch. By pulling data directly from the imdb database, you are able to dynamically query each category shown in the navigation bar. You can click on each category and see what the categories have to offer in real-time.'
            projectTech='Built with: Next.js, TailwindCSS'
        />
        <div className='bg-black mt-12 pt-12'>
            <ProjectImage
                img='/hulu00.png'
            />
            <ProjectImage
                img='/hulu01.png'
            />
            <ProjectImage
                img='/hulu02.png'
            />       
        </div>
        <ProjectButtons
            siteLink='https://hulu-clone-devnchi.vercel.app/'
            gitLink='https://github.com/devnchi/hulu-2.0'
        />
        <Footer />
    </div>
  )
}

export default hulu