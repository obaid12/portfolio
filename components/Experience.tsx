import React from 'react'
import Title from './Title'
import { MdOutlineWork } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import ExperienceCard from './Experiencecard';
import { TbBrandUpwork, TbDeviceDesktopAnalytics } from 'react-icons/tb';



const Experience = () => {
  return (
    <div className='wrapper'>
        <Title text='Experience' icon={<MdOutlineWork />} />
         <div className='grid grid-cols-2 gap-10'>
        <ExperienceCard
      title ='Systems Limited'
      subTitle='Dynamic Commerce Consultant 2023 -present'
      icon={<MdOutlineWork />}
        />
        <ExperienceCard
          title ='Cyberx'
          subTitle='React Developer 2021-2022 '
          icon={<TbBrandUpwork />
        }
        />
        <ExperienceCard
         title ='Merik Solution'
         subTitle='React Developer 2022-2023 '
         icon={<TbDeviceDesktopAnalytics />
        }
        />
        <ExperienceCard
         title ='Merik Solution'
         subTitle='React Developer 2021-2022 '
         icon={<TbBrandUpwork />
        }
        />
    </div>
    </div>
  )
}

export default Experience;