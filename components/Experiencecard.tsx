import React, { ReactNode } from 'react'

interface props{
    title:string,
    subTitle:string,
    icon:ReactNode

}
const ExperienceCard = ({title,subTitle,icon}:props) => {
  return (
    <div className='flex items-center gap-6'>
    <span className='w-12 h-12 rounded-full bg-black border -[2px] border-green-400 flex items-center justify-center'>
        <span className='text-2xl'>{icon}</span>
    </span>
    <h3 className='text-2xl font-bold'>
        {title}
    </h3>
    <p className='text-base tracking-wide text-gray-500'>
     {subTitle}
    </p>
</div>
  )
}

export default ExperienceCard