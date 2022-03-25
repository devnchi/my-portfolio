import React from 'react'
import  Link from 'next/link';
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";


type Props = {}

function Navbar({}: Props) {
    return (
    <nav className='sticky flex justify-between p-5 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
             <img 
             className='w-56 object-contain cursor-pointer' 
             src='/chi_igbokwe_logo_01.png'
             alt="Chi Igbokwe's professional portfolio"
             />
            </Link>
        </div>
        <div className='flex font-spaceMono items-center space-x-5 text-black'>
            <a href='/about'><h3 className='hover:scale-105 hover:underline'>About</h3></a>
            <a href='/work'><h3 className='hover:scale-105 hover:underline'>Work</h3></a>
            <a href='/contact'><h3 className='hover:scale-105 hover:underline'>Contact</h3></a>
            <a href='https://google.com' target='_blank'><h3 className='hover:scale-105 hover:underline'>Blog</h3></a>
        </div>
    </nav>
  )
}

export default Navbar;