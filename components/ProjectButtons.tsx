import React from 'react'
import  Link from 'next/link';

type Props = {
  siteLink: string,
  gitLink: string,
}

function ProjectButtons({siteLink, gitLink}: Props) {
  return (
    <div className='flex p-3 bg-black items-center justify-center'>
      <Link href={siteLink}>
        <a target='_blank'><button className='rounded-xl text-2xl p-6 m-5 2xl:text-4xl md:text-2xl bg-purple-600 text-white font-comforterBrush flex items-center justify-center md:p-6 md:m-10 hover:bg-gray-400 cursor-pointer'>
              Visit Site
          </button></a>
      </Link>
      <Link href={gitLink}>
      <a target='_blank'><button className='rounded-xl text-2xl p-6 m-5 2xl:text-4xl md:text-2xl bg-purple-600 text-white font-comforterBrush flex items-center justify-center md:p-6 md:m-10 hover:bg-gray-400 cursor-pointer'>
              See Github Repo
          </button></a>
      </Link>
    </div>  
  )
}

export default ProjectButtons