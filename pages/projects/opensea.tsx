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
            projectDescription='I have been very interested in NFTs and Web 3.0 for a while now. With all my interests in mind, I thought this would be a perfect project to bring them all together and challenge myself to learn something new. When you navigate to the "Collections" page you will find real content from Bored Ape Yatch Club You not pulled from the backend but from Thirdweb, meaning that the data I am pulling is decentralized content. There is even functionality for purchasing the NFTs with your MetaMask wallet but since thses are not my assets to sell, I have not listed any images for sale (please visit the source code to see the purchase logic). I am also working on my own NFT collection project but I thought that this application was a good way to show my knowledge of the Web 3.0 development and design process.'
            projectTech='Built with: Next.js, Typescript, Thirdweb, MetaMask, Sanity.io, TailwindCSS, Figma'
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
            siteLink='https://opensea-clone-devnchi.vercel.app/'
            gitLink='https://github.com/devnchi/opensea-clone-web3.0' 
        />
        <Footer />
    </div>
  )
}

export default opensea