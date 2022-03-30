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
            pageTitle='YouTopia'
            projectDescription='This was one of my first full stack Javscript projects. I built a unique social media application that focuses on learning and creativity. It was meant to be a virtual world experince where you meet and interact woth people based solely on intellectual interests. To do that, I have the users create avatars, add "comrades", and interact within a concpet that I called "the atlas", a world divided into different intellectual subjects. I really thought of this as a product and an experience, not just a web application. For the minimum viable product that it is, it is a very robust rendering of the idea that I was going for and has a quite a lot of functionality in the state that it is in. I would like to revisit this project scale it out into the grand idea that I had in mind when I deceided to build this application with the technology that I am using now like Next.js, Thirdweb, Three.js, and Blender.'
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