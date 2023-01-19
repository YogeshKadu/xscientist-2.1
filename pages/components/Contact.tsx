import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="relative h-screen flex flex-col justify-center px-5 max-w-7xl mx-auto items-center overflow-hidden">
        {/* <motion.h1
        initial={{
          scale:0
        }}
        whileInView={{
          scale:1,
        }}
        transition={{
          delay:0.5
        }} className='absolute top-20 md:top-32 text-lg md:text-2xl font-bold tracking-[10px] text-gray-400 uppercase text-center w-screen'>
        Contact Us
      </motion.h1> */}
      <div className='container max-w-[800px] mx-auto mt-5 md:mt-10 w-full'>
        <div className="bg-black/20 p-5 rounded-md shadow-lg shadow-zinc-900 text-gray-300">
          <form action="#" method='POST' className='w-full grid grid-cols-6 gap-y-6 gap-x-8'>
            <motion.h1
              initial={{
                scale:0
              }}
              whileInView={{
                scale:1
              }}
              transition={{
                delay:0.6
              }}
             className="title uppercase text-gray-400 tracking-wide col-span-6 text-center text-2xl">
              Contact US
            </motion.h1>
            <div className="input-group col-span-6 md:col-span-3 flex flex-col gap-2">
                <label htmlFor="fullname" className='tracking-wider'> Email Address :</label>
                <input type="text" name="fullname" placeholder='you@example.com ...' id="fullname" className='px-4 w-full h-10 rounded bg-black/20 shadow-md shadow-black outline-pink-500' />
                <p className="mt-1 text-xs text-gray-500">It will not be used for spam or other purpose.</p>
            </div>
            <div className="input-group col-span-6 md:col-span-3 flex flex-col gap-2">
                <label htmlFor="nickname">Name :</label>
                <input type="text" name="nickname" id="nickname" placeholder='Robin, Felix ...' className='
                px-4 w-full h-10 rounded bg-black/20 shadow-md shadow-black outline-pink-500
                ' />
                <p className="mt-1 text-xs text-gray-500">Hey there. 👋</p>
            </div>
            <div className="input-group col-span-6 flex flex-col gap-2">
                <label htmlFor="comments">Comments:</label>
                <textarea name="comments" id="comments" cols={3} rows={2}
                    placeholder="Comments ..."
                    className=" py-3
                        px-4 w-full max-h-40 rounded bg-black/20 shadow-md shadow-black outline-pink-500
                    "
                ></textarea>
            </div>
            <div className='col-span-6 flex justify-center'>
                <button type="submit" className='bg-blue-600 w-28 h-10 rounded-md'>Send</button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
export default Contact;