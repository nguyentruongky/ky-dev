import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import Skill from './Skill'
import { motionConfig } from '../common'

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div
      {...motionConfig}
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <SectionHeader title='Skills' />

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}
