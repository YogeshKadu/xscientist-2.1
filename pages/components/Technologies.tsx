import React, { useEffect, useRef, useState } from 'react';
import {
    DiAngularSimple, DiBootstrap, DiDjango, DiFirebase, DiHtml5, DiJsBadge, DiNodejs, DiPython, DiReact, DiUnitySmall
} from "react-icons/di";
import {
    SiTailwindcss
} from "react-icons/si";



import { motion } from "framer-motion";
type props = {};
export default function Technologies(props: props) {
    const technologies = [
        {
            id: 1,
            name: "Angular",
            icon: <DiAngularSimple className='w-full h-full' />
        },
        {
            id: 2,
            name: "Bootstrap",
            icon: <DiBootstrap className='w-full h-full' />
        },
        {
            id: 3,
            name: "Django",
            icon: <DiDjango className='w-full h-full' />
        },
        {
            id: 4,
            name: "Firebase",
            icon: <DiFirebase className='w-full h-full' />
        },
        {
            id: 5,
            name: "HTML",
            icon: <DiHtml5 className='w-full h-full' />
        },
        {
            id: 6,
            name: "Javascript",
            icon: <DiJsBadge className='w-full h-full' />
        },
        {
            id: 7,
            name: "Node JS",
            icon: <DiNodejs className='w-full h-full' />
        },
        {
            id: 8,
            name: "Python",
            icon: <DiPython className='w-full h-full' />
        },
        {
            id: 9,
            name: "React",
            icon: <DiReact className='w-full h-full' />
        },
        {
            id: 10,
            name: "Tailwind",
            icon: <SiTailwindcss className='w-full h-full' />
        },
        {
            id: 11,
            name: "unity",
            icon: <DiUnitySmall className='w-full h-full' />
        },
    ]
    return (
        <div className='relative h-screen flex flex-col justify-center px-10 max-w-7xl mx-auto items-center overflow-hidden'>
            <motion.h1
                initial={{
                    scale: 0
                }}
                whileInView={{
                    scale: 1,
                }}
                transition={{
                    delay: 0.5
                }}
                className='absolute top-20 sm:top-32 text-lg md:text-2xl font-bold tracking-[10px] text-gray-400 uppercase text-center w-screen'
            >Technologies</motion.h1>
            <div className="container max-w-[600px] mx-auto">
                <div className='flex gap-10 flex-wrap justify-center mt-10'>
                    {
                        technologies.map((item) =>
                            <div className='flex flex-col items-center gap-2 text-gray-400' key={item.id}>
                                <div className="icon w-10 md:w-20">
                                    {item.icon}
                                </div>
                                <div className="title">
                                    <h2 className=' uppercase text-xs tracking-widest'>{item.name}</h2>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}