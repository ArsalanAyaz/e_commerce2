import React from 'react'
import Image from 'next/image';

interface propsType{
    img:string;
    title:string;
    desc:string;
} 

export const FeatureCard = ({img, title, desc}:propsType) => {
  return (
    <div className='flex gap-8'>
        <Image 
         className="h-[50px] w-auto"
        src={img}
        width={60}
        height={50}
        alt={title}

        />
    </div>
  )
}
