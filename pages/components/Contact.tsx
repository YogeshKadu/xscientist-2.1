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


{/* <div className="">
  <div className="md:grid md:grid-cols-3 md:gap-6">
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
      </div>
    </div>

    <div className="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" name="country" autoComplete="country-name" className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="col-span-6">
                <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" autoComplete="address-level2" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                <input type="text" name="region" id="region" autoComplete="address-level1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div> */}


      </div>
    </div>
  )
}

export default Contact;