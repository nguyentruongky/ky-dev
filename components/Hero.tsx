/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ['an iOS', 'a React Native', 'a Node.js'],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircle />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb6c133bb-2b80-417f-ae72-bf100c922007%2Favatar.png?table=block&id=f3a4ceb1-fc4e-452e-a031-d761d9080093&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=250&userId=&cache=v2'
        alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[7px] md:tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-xl md:text-5xl lg:text-6xl font-semibold scroll-px-10 text-gray-50/60'>
          I'm Ky Nguyen, <span className='underline text-white'>{text}</span>{' '}
          developer
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>

          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
