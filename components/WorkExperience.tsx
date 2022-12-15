import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ExperienceCard from './ExperienceCard'
import { icons, motionConfig } from '../common'
import { companies } from '../data/companies'

type Props = {}

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      {...motionConfig}
      className='flex relative overflow-hidden flex-col text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'
    >
      <SectionHeader title='Experience' />

      <div className='w-full mt-[100px] flex-col flex pt-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 '>
        {companies.map((company, index) => (
          <ExperienceCard
            key={index}
            {...company}
            contentOnRight={index % 2 === 0}
          />
        ))}
      </div>
    </motion.div>
  )
}
