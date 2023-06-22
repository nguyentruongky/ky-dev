/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Projects, { ProjectFilter } from '../components/Projects';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen overflow-scroll z-0 scrollbar-none'>
      <Head>
        <title>Ky's Portfolio</title>
      </Head>

      <Header />

      <section id='hero'>
        <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='experience'>
        <WorkExperience />
      </section>

      <section id='projects'>
        <Projects />
      </section>
    </div>
  );
}
