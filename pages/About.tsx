import Title from '@/components/Title';
import React from 'react';
import { LiaInfoSolid } from 'react-icons/lia';
// import { LiaInfoSolid } from 'react-icons/lia';

const About = () => {
  return (
    <div className='wrapper'>
      <Title text='About me' icon={<LiaInfoSolid />} />
      <div className='text-lg tracking-wide flex flex-col gap-6'>
        <p>
          I approach projects with a personal commitment to excellence, viewing programming not just as a job but as a fulfilling pursuit. Understanding the importance of maintaining a healthy work-life balance, I prioritize both productivity and well-being. Problem-solving lies at the core of programming, and I actively cultivate my mental acuity through tackling puzzles and complex challenges. Moreover, I recognize the significance of soft skills in effective project management and client interaction. Should you choose to engage me for your startup or project, you can expect unwavering dedication and a focus on delivering optimal results.
        </p>
      </div>

    </div>
  );
};

export default About;


