import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import PageHeader from '../../components/PageHeader'
import ProjectButtons from '../../components/ProjectButtons'
import ProjectImage from '../../components/ProjectImage'

type Props = {}

function createdByChi({}: Props) {
  return (
    <div>
        <Navbar />
        <PageHeader
            pageTitle='Created By Chi'
            projectDescription='I started an online platform called "Created By Chi" to act as a space where I can share created content and resources for aspiring developers and designers. Its primarlity a blog for some of my ideas on current tech and other forms of creative media but I am also expanding it to provide courses and tutorials.'
            projectTech='Built with: Next.js, Typescript, TailwindCSS, Sanity.io, Illustrator, Figma'
        />
        <div className='bg-black mt-12 pt-12'>
            <ProjectImage
                img='/cxc00.png'
            />      
        </div>
        <ProjectButtons
            siteLink='https://www.createdbychi.com/'
            gitLink='https://github.com/devnchi/created-by-chi'
         />
        <Footer />
    </div>
  )
}

export default createdByChi