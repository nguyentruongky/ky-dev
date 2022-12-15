/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5 bg-[rgb(36,36,36)]'>
      <LeftView />
      <RightView />
    </header>
  )
}

const LeftView = () => {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      className='flex flex-row items-center'
    >
      <SocialIcon
        url='https://github.com/nguyentruongky33'
        fgColor='gray'
        bgColor='transparent'
      />
      <SocialIcon
        url='https://www.codementor.io/@nguyentruongky'
        fgColor='gray'
        bgColor='transparent'
      />
    </motion.div>
  )
}

const RightView = () => {
  return (
    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'
    >
      <Link href='mailto:nguyentruongky33@gmail.com?subject=Hello'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400 font-semibold'>
          get in touch
        </p>
      </Link>
    </motion.div>
  )
}
