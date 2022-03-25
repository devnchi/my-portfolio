import React from 'react'

type Props = {}

function ProjectButtons({}: Props) {
  return (
    <div className='flex p-3 bg-black items-center justify-center'>
        <button className='rounded-xl text-4xl bg-purple-600 text-white font-comforterBrush flex items-center justify-center p-8 m-10 hover:bg-gray-400 cursor-pointer'>
            Visit Site
        </button>
        <button className='rounded-xl text-4xl bg-purple-600 text-white font-comforterBrush flex items-center justify-center p-8 m-10 hover:bg-gray-400 cursor-pointer'>
            See Github Repo
        </button>
    </div>  
  )
}

export default ProjectButtons