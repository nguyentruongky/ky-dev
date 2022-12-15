/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { motionConfig } from '../common'
import Link from 'next/link'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
      {...motionConfig}
      className='flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <SectionHeader title='About' />

      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
        viewport={{ once: true }}
        src='https://nguyentruongky.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F542a9170-8171-48e2-85fd-d168612e63c2%2Fphoto-1555066931-4365d14bab8c_(1).jpeg?table=block&id=f3a4ceb1-fc4e-452e-a031-d761d9080093&spaceId=accf97a8-8a21-4268-8e5d-8f37c01e9a3b&width=2000&userId=&cache=v2'
      /> */}

      <div className='space-y-10 px-0 md:px-10 text-2xl'>
        <h4 className='text-4xl font-semibold text-white/70'>My stories</h4>
        <p>
          I have ten years of experience working as a software engineer. Some
          products of mine serve millions of users like TokyoCatch, DoNotPay,
          Coinhako, and Moca.
        </p>

        <p>
          I love coding and teaching. If you don't find me at work, possibly I'm
          teaching at{' '}
          <a
            className='underline'
            target='_blank'
            rel='noreferrer'
            href='https://www.codementor.io/@nguyentruongky'
          >
            Codementor
          </a>
          .
        </p>

        <p>
          I have 5 years working remotely in the US timezone, and flexible to
          work in any time zones.
        </p>
      </div>
    </motion.div>
  )
}
