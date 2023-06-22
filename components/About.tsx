/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { motionConfig } from '../common';
import Link from 'next/link';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      {...motionConfig}
      className='flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
      <SectionHeader title='About' />

      <div className='space-y-10 px-0 md:px-10 text-2xl text-gray-400'>
        <p>
          I have <span className='font-bold text-3xl text-white'>10</span> years
          of experience working as a software engineer. Some products of mine
          serve millions of users like TokyoCatch, DoNotPay, Coinhako, and Moca.
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
          I have <span className='font-bold text-3xl text-white'>5</span> years
          working remotely in the US timezone, and flexible to work in any time
          zones.
        </p>
      </div>
    </motion.div>
  );
}
