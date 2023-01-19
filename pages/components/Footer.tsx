import React from 'react';
import { FaHome } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";


function Footer() {
  return (
    <div className='container mx-auto'>
        <div className="grid grid-cols-2 px-5 max-w-[1000px] mx-auto pb-5">
            <div className="navbar col-span-2 md:col-span-1 flex flex-col md:flex-row md:gap-3">
                <a href="#" className='flex gap-2 py-3 items-center'>Home</a>
                <a href="#" className='flex gap-2 py-3 items-center'>Products</a>
                <a href="#" className='flex gap-2 py-3 items-center'>About</a>
                <a href="#" className='flex gap-2 py-3 items-center'>Technologies</a>
                <a href="#" className='flex gap-2 py-3 items-center'>Team</a>
            </div>
        </div>
    </div>
  )
}
{/* <p className="m-0 text-xs text-gray-500 py-1 uppercase">COPYRIGHT © 2022-2023. ALL RIGHTS Reserved</p> */}

export default Footer
