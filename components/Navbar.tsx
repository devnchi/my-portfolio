import React from 'react'
import  Link from 'next/link';

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='sticky flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
             <img 
             className='w-56 object-contain cursor-pointer' 
             src='/chi_igbokwe_logo_01.png'
             alt="The official logo for Chi Igbokwe's professional portfolio"
             />
            </Link>
        </div>
        <div className='flex font-spaceMono items-center space-x-5 text-black'>
            <a href='/about'><h3>About</h3></a>
            <a href='/work'><h3>Work</h3></a>
            <a href='/contact'><h3>Contact</h3></a>
            <a href='https://google.com' target='_blank'><h3>Blog</h3></a>
        </div>
    </nav>
  )
}

export default Navbar;