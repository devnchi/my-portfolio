import React from 'react'
import  Link from 'next/link';

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
             <img 
             className='w-44 object-contain cursor-pointer' 
             src='https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png'
             alt="The official logo for Chi Igbokwe's professional portfolio"
             />
            </Link>
        </div>
        <div className='flex items-center space-x-5 text-black'>
            <h3>About</h3>
            <h3>Work</h3>
            <h3>Contact</h3>
            <h3>Blog</h3>
        </div>
    </nav>
  )
}

export default Navbar;