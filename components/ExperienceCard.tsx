/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  contentOnRight: boolean
  iconUrl: string
  roundedIcon: boolean
  companyName: string
  title: string
  screenshots: string[]
  summary: string[]
}

export default function ExperienceCard(props: Props) {
  return (
    <div
      className={`flex mb-8 lg:mb-10 max-w-7xl flex-col
       md:flex-row rounded-2xl bg-[#292929] p-5 md:p-10 cursor-pointer transition-opacity duration-200 mx-8 lg:mx-10 overflow-y-scroll snap-y snap-mandatory`}
    >
      <Left {...props} />
      <div className='w-8' />
      <Right {...props} />
    </div>
  )
}

const Left = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: props.contentOnRight ? -100 : 100,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className='flex flex-1 flex-col'
    >
      <div className='w-28 h-28 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] justify-center items-center flex self-center md:self-start'>
        <img
          className={`object-contain object-center mx-10 ${
            props.roundedIcon ? 'rounded-full' : ''
          }`}
          src={props.iconUrl}
          alt=''
        />
      </div>
      <div className='mt-8'>
        <h4 className='text-2xl md:text-3xl font-semibold text-center md:text-left'>
          {props.title}
        </h4>
        <p className='font-bold text-xl md:text-2xl mt-1 text-white/50 text-center md:text-left'>
          {props.companyName}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg mt-4'>
          {(props.summary ?? []).map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

const Right = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: props.contentOnRight ? 100 : -100,
        opacity: 0
      }}
      whileInView={{
        x: 0,
        opacity: 1
      }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className='flex flex-1 flex-row  mt-6 md:mt-0 items-start overflow-scroll scrollbar-none'
    >
      {(props.screenshots ?? []).map(ss => (
        <ImageView key={ss} url={ss} />
      ))}
    </motion.div>
  )
}

const ImageView = (props: { url: string }) => {
  return (
    <img
      src={props.url}
      alt=''
      className='mr-1 w-[150px] md:w-[250px] aspect-auto'
    />
  )
}
