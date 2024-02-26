import React from 'react'
import { LiaInfoSolid } from 'react-icons/lia'
import { ReactNode } from 'react'
interface props{
    text:string;
    icon:ReactNode
}

const Title = ({text,icon}:props) => {
  return (
    <div className='flex items-center gap-5 text-2xl group pb-8'>
    <h3 className='font-semibold relative overflow-hidden'><span className='w-full h-[2px] absolute bottom-0 left-0 inline-block bg-red-900 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300'></span>
        {text}</h3>
    <span className='text-blue-900'>{icon}</span>
  </div>
  )
}

export default Title;