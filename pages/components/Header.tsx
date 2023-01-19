import Image from 'next/image';
import React from 'react';
import logo from "./../../assets/img/logo_3.png";
type props={};
export default function Header({}:props) {
  return (
    <header className='sticky top-0 flex flex-row justify-between items-center h-16 md:h-28 w-screen max-w-7xl mx-auto pl-2 pr-5 z-20'>
        <Image src={logo.src} width="112px" height={'52px'} alt="logo" className='object-cover max-h-full w-28' />
        <div className='justify-center items-center gap-2 hidden md:flex md:flex-row'>
          <button className='link text-white'>Home</button>
          <button className='link text-gray-400'>Products</button>
          <button className='link text-gray-400'>About</button>
          <button className='link text-gray-400'>Technologies</button>
          <button className='link text-gray-400'>Team</button>
          <button className='link text-gray-400'>Career</button>
        </div>
        <button className='bg-[#5d5fec] px-5 py-1 rounded-3xl'>Contact Us</button>
    </header>
  )
}