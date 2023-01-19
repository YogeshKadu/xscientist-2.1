import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Products() {
  return (
    <div className="relative h-screen flex flex-col justify-center px-10 max-w-7xl mx-auto items-center overflow-hidden">
      <motion.h1
        initial={{
          scale:0
        }}
        whileInView={{
          scale:1,
        }}
        transition={{
          delay:0.5
        }} className='absolute top-20 md:top-32 text-lg md:text-2xl font-bold tracking-[10px] text-gray-400 uppercase text-center w-screen'>
        Products
      </motion.h1>
      <div className='container mx-auto mt-5 md:mt-10 w-full'>
        <div className="overflow-x-scroll scrollbar-hide snap-x snap-mandatory gap-5 md:gap-10 w-full flex">
          {/*  */}
          <div className='relative snap-start flex-1 h-96 min-w-max'>
            <div className="image w-full h-full">
              <Image src="https://picsum.photos/200/300" alt="demo image" layout='fill' className='object-cover grayscale-[0.5]' />
            </div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-black/20 rounded-md grid place-content-center">
              <span className='uppercase tracking-widest'>NEWSLIX</span>
            </div>
          </div>
          <div className='relative snap-start flex-1 h-96 min-w-max'>
            <div className="image w-full h-full">
              <Image src="https://picsum.photos/200/300" alt="demo image" layout='fill' className='object-cover grayscale-[0.5]' />
            </div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-black/20 rounded-md grid place-content-center">
              <span className='uppercase tracking-widest'>DEEPOST</span>
            </div>
          </div>
          <div className='relative snap-start flex-1 h-96 min-w-max'>
            <div className="image w-full h-full">
              <Image src="https://picsum.photos/200/300" alt="demo image" layout='fill' className='object-cover grayscale-[0.5]' />
            </div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-black/20 rounded-md grid place-content-center">
              <span className='uppercase tracking-widest'>ONCLICK</span>
            </div>
          </div>
          <div className='relative snap-start flex-1 h-96 min-w-max'>
            <div className="image w-full h-full">
              <Image src="https://picsum.photos/200/300" alt="demo image" layout='fill' className='object-cover grayscale-[0.5]' />
            </div>
            <div className="absolute top-4 left-4 right-4 bottom-4 bg-black/20 rounded-md grid place-content-center">
              <span className='uppercase tracking-widest'>Darksight</span>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  )
}
