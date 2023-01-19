import React from 'react';
import { motion } from "framer-motion";

type props={}
export default function About({}:props) {
  return (
    // <div className='relative h-screen flex flex-col max-w-full mx-auto items-center justify-center overflow-hidden'>
    <div className='relative h-screen flex flex-col justify-center px-10 max-w-7xl mx-auto items-center overflow-hidden'>
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
        About US
      </motion.h1>
      <div className=' text-sm md:text-base mt-20'>
        <p className='text-justify mb-2'>xScientist is an software and game development company based in India focused on helping entrepreneurs, engineers and scientists to build great products using cutting edge technologies.</p>
        <p className='text-justify mb-2'>We are x individuals on a mission to bring people's ideas into reality with the line of code and provides rapid development platform to collaborators from around the world remotely.</p>
        <p className='text-justify mb-2'>Our story began in 2018 when some of us were still in college. While solving some of the most complex problems during undergrad like Secure Drone Communication, Ship Detection and Size Estimation from Synthetic Aperture Radar Sentinel Satellite Images, GPS Navigation System with Augmented Reality and representing India at Hackathons, we realised the potential of AI. Today, we aim to run our algorithms on thousands of devices across the world empowering organisations to do more harnessing the true capacity of Artificial Intelligence.</p>
      </div>
      <motion.div
        initial={{x:100}}
        whileInView={{x:0}}
        viewport={{ once: true }}
        transition={{
          delay:0.1
        }}

        className='flex w-full overflow-scroll snap-x snap-mandatory scrollbar-hide'>
        {[].constructor(10).fill(1).map((item:any,key:number)=>
          <div key={key} className="card relative w-2/3 md:w-1/4 lg:w-2/12 h-32 shrink-0 flex flex-col items-center justify-center gap-10 snap-center sm:snap-start
          before:block before:absolute before:w-16 before:border-t-4 before:border-dotted before:border-[#5D5FEC] before:left-0
          after:block after:absolute after:w-16 after:border-t-4 after:border-dotted after:border-[#5D5FEC] after:right-1
          ">
            <div className='w-4 h-4 rounded-[500px] bg-[#5D5FEC] shadow-[0px_0px_0px_15px] shadow-[#5d5fec]/50 absolute
              top-[55px]
            '></div>
            {/* <span className='w-full h-[4px] bg-[#5D5FEC] block card-first:rounded-lg'></span> */}
            <p className='mt-24'>2018</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
