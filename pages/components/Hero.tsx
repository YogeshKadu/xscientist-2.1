import React from 'react';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

type props = {};
export default function Hero ({}: props){

    return (
        <div className='flex flex-col justify-center items-center h-screen space-y-5'>
            <motion.h1
                initial={{y:-50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:.4}}
                className='uppercase text-4xl font-extrabold'
            >Make</motion.h1>
            <motion.h1
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1}}
                className='uppercase text-4xl font-extrabold'
            >
                {/* <Typical
                    loop={Infinity}
                    wrapper="b"
                    speed={2000}
                    steps={[
                        "Code",
                        2000,
                        "life",
                        2000,
                        "study",
                        2000,
                        "Everything",
                        2000
                    ]}
                    /> */}
        <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
            </motion.h1>
            <motion.h1
                initial={{y:50,opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:.4}}
                className='uppercase text-4xl font-extrabold'
            >awesome{' '}!</motion.h1>
        </div>
    )
}
