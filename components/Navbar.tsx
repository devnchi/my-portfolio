import React, { useState } from 'react'
import  Link from 'next/link';
import { slide as Menu } from "react-burger-menu";
import screens from '../tailwind.config'
import { Transition } from '@headlessui/react';


type Props = {}

function Navbar({}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
    <nav className='sticky flex justify-between p-6 max-w-7xl mx-auto'>
        <div className='flex items-center space-x-5'>
            <Link href='/'>
             <img 
             className='w-44 md:w-56 object-contain cursor-pointer' 
             src='/chi_igbokwe_logo_01.png'
             alt="Chi Igbokwe's professional portfolio"
             />
            </Link>
        </div>
        <div className='hidden md:flex text-lg font-spaceMono items-center space-x-5 text-black'>
            <a href='/about'><h3 className='hover:scale-105 hover:underline'>About</h3></a>
            <a href='/work'><h3 className='hover:scale-105 hover:underline'>Work</h3></a>
            <a href='/contact'><h3 className='hover:scale-105 hover:underline'>Contact</h3></a>
            <a href='https://www.createdbychi.com/' target='_blank'><h3 className='hover:scale-105 hover:underline'>Blog</h3></a>
        </div>
        <div className="mr-2 flex md:hidden ">
			<button
				onClick={() => setIsOpen(!isOpen)}
				type="button"
				className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white"
				aria-controls="mobile-menu"
				aria-expanded="false"
			>
			<span className="sr-only">Open main menu</span>
				{!isOpen ? (
					<svg
					    className="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
					<path
					    strokeLinecap="round"
					    strokeLinejoin="round"
					    strokeWidth="2"
					    d="M4 6h16M4 12h16M4 18h16"
					/>
					</svg>
					    ) : (
					<svg
					    className="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
	    				stroke="currentColor"
						aria-hidden="true"
					>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
					)}
		    </button>
		</div>

		<Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
		>
		{(ref: any) => (
		<div className="md:hidden font-spaceMono text-xl" id="mobile-menu">
			<div
				ref={ref}
				className="bg-white px-2 pt-2 pb-3 space-y-5 p-2 sm:px-3"
			>
                <a href='/about'><h3 className='hover:scale-105 hover:underline hover:text-purple-600'>About</h3></a>
                <a href='/work'><h3 className='hover:scale-105 hover:underline hover:text-purple-600'>Work</h3></a>
                <a href='/contact'><h3 className='hover:scale-105 hover:underline hover:text-purple-600'>Contact</h3></a>
                <a href='https://www.createdbychi.com/' target='_blank'><h3 className='hover:scale-105 hover:underline hover:text-purple-600'>Blog</h3></a>
			</div>
		</div>
		)}
		</Transition>
    </nav>
  )
}

export default Navbar;