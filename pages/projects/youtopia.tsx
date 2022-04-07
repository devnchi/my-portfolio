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
            projectDescription="This was one of my first full-stack Javascript projects. I built a unique social media application that focuses on learning and creativity. YouTopia is a virtual world experience where you meet and interact with people based solely on intellectual interests. To do that, I have the users create avatars, add 'comrades', and interact within a concept that I called 'the atlas', a world divided into different intellectual subjects. I thought of this as a product and an experience, not just a web application. For a minimum viable product, it is a very robust rendering of my initial idea and has quite a lot of functionality in its current state. I would like to revisit this project and scale it out with the technologies I am using now such as Next.js, Thirdweb, Three.js, and Blender."
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