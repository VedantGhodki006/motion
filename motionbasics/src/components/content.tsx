'use client'

import React from 'react'
import { motion } from 'motion/react'

const Content = () => {
  return (
    <div className='[perpective-1000px] [transform-style:preserve-3d] h-screen w-full bg-neutral-900 flex items-center justify-center'
        style={{
            backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2), 0.5px, transparent 0)`,
            backgroundSize: "8px 8px",
            backgroundRepeat: "repeat"

        }}
    >
        <motion.button 
        whileHover={{
            rotateX: 10,
            rotateY: 10,
            boxShadow: "0px 20px 50px rgba(4,50,100,0.2",
            y:-5,
        }}
        whileTap={{
            y:0,
        }}
        style={{
            translateZ:100,
        }}
        
        className='group relative px-6 py-4 rounded-4xl borders text-neutral-500 text-xl bg-black shadow-[0px_1px_4px_0px_rgba(255,255,0.1)_inset, 0px_-1px_4px_0px_rgba(255,255,255,0.1)_inset'>Get Started
            <span className='absolute inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-cyan-600 to-transparent h-px mx-auto'></span>
            <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 -bottom-px bg-gradient-to-r from-transparent via-cyan-600 to-transparent h-[4px] mx-auto blur-md'></span>
        </motion. button>
    </div>
  )
}

export default Content