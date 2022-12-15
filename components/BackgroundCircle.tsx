import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '280%', '20%']
      }}
      transition={{
        duration: 6.5
      }}
      className='relative flex justify-center items-center'
    >
      <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping opacity-25' />
      <div className='absolute border [#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping opacity-25' />
      <div className='absolute border [#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping opacity-25' />
      <div className='rounded-full border border-[#333333] h-[650px] w-[650px] absolute mt-52 animate-pulse opacity-5' />
      <div className='rounded-full border border-[#333333] h-[800px] w-[800px] absolute mt-52 opacity-25' />
    </motion.div>
  )
}

export default BackgroundCircle
