import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Team() {
    const teamName = [
        {
            id:1,
            name:"KrissKad",
            img:"https://xsgames.co/randomusers/avatar.php?g=male"
        },
        {
            id:2,
            name:"Bitloader",
            img:"https://xsgames.co/randomusers/avatar.php?g=male"
        },
        {
            id:3,
            name:"Turshar",
            img:"https://xsgames.co/randomusers/avatar.php?g=male"
        }
    ]
    return (
        <div className='relative min-h-screen flex justify-center items-start md:items-center px-10 max-w-7xl mx-auto'>
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
                Team
            </motion.h1>
            <div className='container-sm mx-auto my-16 mt-32 md:my-0'>
                <div className='flex justify-center flex-wrap gap-10'>
                    {
                        teamName.map(item=>
                            <div key={item.id} className="relative bg-black/20 flex-shrink min-w-[250px] h-[350px] rounded-lg overflow-hidden">
                                <div className="img w-full h-full">
                                    <Image src={`https://xsgames.co/randomusers/avatar.php?g=male&g=pixel&random=${item.id}`}
                                        layout='fill'
                                        alt="profile"
                                        className='w-full h-full grayscale-[0.5]'
                                     />
                                </div>
                                <motion.h2
                                    initial={{
                                        x:100,opacity:0
                                    }}
                                    whileInView={{
                                        x:0,opacity:1
                                    }}
                                    transition={{
                                        delay:0.8
                                    }}
                                className='absolute top-0 left-0 text-slate-800 p-5 text-xl
                                uppercase tracking-widest font-extrabold'>
                                    {item.name}
                                </motion.h2>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}