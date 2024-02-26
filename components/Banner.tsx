import React from 'react';
import Image from 'next/image';
import my from '../public/images/my.jpg';

const Banner = () => {
  return (
    <div className='wrapper flex flex-col md:flex-row items-center gap-10'>
      <div className='w-44 h-44 rounded-full bg-black'>
        <Image className='w-full h-full rounded-full border-[2px] boder-blue-600 p-1 object-cover' src={my} alt="my" />
      </div>
      <div className="w-3/4 flex:items-center md:items-start flex-col gap-2">
        <div className=''>
        <h1 className='text-5xl font-bold text-white'>Obaid  Rehman</h1>
        <h3 className='text-3xl font-semibold bg-clip-text  bg-gradient-t0-r from-blue-400 via-red-300 text-white'>
            Full Stack Developer</h3>
        <p className='text-base tracking-wide text-white to-indigo-300'>
As a Full Stack Web Developer, I specialize in ReactJS, NextJS, NodeJS, and MongoDB. Collaborating with diverse teams using platforms like GitHub and Bitbucket has honed my communication and teamwork skills.
What sets me apart is my genuine passion for programming. I approach projects with a personal commitment to excellence, viewing programming not just as a job but as a fulfilling pursuit. Understanding the importance of maintaining a healthy work-life balance, I prioritize both productivity and well-being.
Problem-solving lies at the core of programming, and I actively cultivate my mental acuity through tackling puzzles and complex challenges. Moreover, I recognize the significance of soft skills in effective project management and client interaction.
Should you choose to engage me for your startup or project, you can expect unwavering dedication and a focus on delivering optimal results.
        </p>
      </div>
    </div>
    </div>
  );
}

export default Banner;
