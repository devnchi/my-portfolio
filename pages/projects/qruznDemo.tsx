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
            pageTitle='Qruzn Demo'
            projectDescription='Initially, I designed and implemented this rental service application just for fun. Now, I am currently building and scaling it out now in Next.js as a full service car rental application that will be used by a client. Here is the front end demo in React of the brand and service that I am currently building.'
            projectTech='Built with: React.js, Typescript, React Redux, TailwindCSS, Styled Components, MongoDB, AdobeXD, Illustrator'
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
            siteLink='https://qruzn-demo-devnchi.vercel.app/'
            gitLink='https://github.com/devnchi/qruzn-v1'
        />
        <Footer />
    </div>
  )
}

export default qruznDemo