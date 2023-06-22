/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { motionConfig } from '../common';
import { projects } from '../data/projects';
import { Project } from '../@types/Project';

export default function Projects() {
  const [projectDatasource, setProjectDatasource] = useState(projects);

  const onClickFilter = (filter: string) => {
    const result = projects.filter(item => item.tags.includes(filter));
    setProjectDatasource(result);
  };

  return (
    <motion.div
      {...motionConfig}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <SectionHeader
        title='Projects'
        subView={<ProjectFilter onClickFilter={onClickFilter} />}
      />

      <div className='relative w-full flex overflow-x-scroll lg:h-screen md:h-screen lg:overflow-y-hidden md:overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 lg:mt-0 mt-[200px] items-start'>
        {projectDatasource.map(project => (
          <section key={project.name} id={project.id}>
            <ProjectCard key={project.name} {...project} />
          </section>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  );
}

const ProjectCard = (prop: Project) => {
  return (
    <div
      id={prop.name}
      className='w-screen flex-shrink-0 snap-center snap-mandatory flex flex-col space-y-5 items-center lg:h-screen lg:justify-center p-6 lg:mt-20 '
    >
      {/* screenshots */}
      <div className='flex flex-row overflow-x-scroll scrollbar-none lg:mb-4'>
        {prop.screenshots.length === 1 && (
          <img
            key={prop.screenshots[0]}
            className={`w-[${prop.imageWidth}px] aspect-auto mr-1 ${
              prop.rounded ? 'rounded-full' : ''
            }`}
            src={prop.screenshots[0]}
            alt=''
          />
        )}

        {prop.screenshots.length > 1 &&
          prop.screenshots.map(url => (
            <img
              key={url}
              className={`w-[100px] md:w-[150px] aspect-auto mr-1 ${
                prop.rounded ? 'rounded-full' : ''
              }`}
              src={url}
              alt=''
            />
          ))}
      </div>

      <div className='px-0 md:px-10 max-w-6xl w-full'>
        {/* project name */}
        <div className='text-xl md:text-3xl font-bold flex flex-row items-center'>
          {prop.name}
          {prop.appstoreUrl && (
            <a
              href={prop.appstoreUrl}
              target='_blank'
              rel='noreferrer'
              className='ml-4'
            >
              <img
                src='https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/appstore.png'
                width={28}
                height={28}
              />
            </a>
          )}
          {prop.githubUrl && (
            <a
              href={prop.githubUrl}
              target='_blank'
              rel='noreferrer'
              className='ml-4'
            >
              <img
                src='https://raw.githubusercontent.com/nguyentruongky/ky-dev/main/public/images/github.png'
                className='aspect-square'
                width={28}
              />
            </a>
          )}
        </div>

        {/* tech stack */}
        <div className='flex flex-row items-start overflow-x-scroll mt-2 flex-nowrap md:flex-wrap scrollbar-none justify-start'>
          {(prop.tech ?? []).map(tech => (
            <Tag key={tech} title={tech} />
          ))}
        </div>

        {/* detail */}
        <div className='text-lg text-center md:text-left mt-4 mb-4'>
          <ul className='list-disc space-y-4 ml-5 text-md md:text-xl text-left'>
            {(prop.details ?? []).map(item => (
              <li key={item}>{item}</li>
            ))}

            {prop.demoUrl && (
              <li>
                <a
                  href={prop.demoUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='underline'
                >
                  View demo
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Tag = (props: { title: string }) => {
  return (
    <p className='bg-[rgb(36,36,36)] px-3 md:px-5 py-2 mr-1 mt-1 rounded-full font-semibold text-sm md:text-lg whitespace-nowrap'>
      {props.title}
    </p>
  );
};

const filters = ['All', 'iOS', 'React Native', 'Full-stack'];

export const ProjectFilter = (props: {
  onClickFilter: (filter: string) => void;
}) => {
  const [activeFilter, setActiveFilter] = useState('All');
  useEffect(() => {
    props.onClickFilter(activeFilter);
  }, [activeFilter]);

  return (
    <div className='flex flex-row mt-4 w-screen  overflow-x-scroll scrollbar-none lg:justify-center md:justify-center'>
      {filters.map(item => (
        <FilterTag
          key={item}
          title={`${item} (${
            projects.filter(project => project.tags.includes(item)).length
          })`}
          isActive={item === activeFilter}
          onClick={() => {
            setActiveFilter(item);
          }}
        />
      ))}
    </div>
  );
};

const FilterTag = (props: {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}) => {
  return (
    <p
      onClick={props.onClick}
      className={`bg-[rgb(36,36,36)] px-4 md:px-5 py-1 mr-1 mt-1 rounded-full text-sm md:text-lg whitespace-nowrap select-none ml-4 cursor-pointer ${
        props.isActive
          ? 'font-semibold border-white text-white border-[2px]'
          : 'font-normal border-gray-400 text-gray-400 border-[1px]'
      }
      `}
    >
      {props.title}
    </p>
  );
};
