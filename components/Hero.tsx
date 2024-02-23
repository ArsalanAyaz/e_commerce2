import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container relative '>

        <Image className='w-full h-auto'
        src="/hero3.jpg"
        width={1500}
        height={900}
        alt="hero bg"/>

        <div className='hidden sm:block absolute top-[50%] left-[20%] translate-x-[-50%]
        translate-y-[-50%] bg-white w-[250px] h-[200px] space-y-3 lg:w-[300px] lg:h-[270px]
        lg:space-y-6 xl:w-[400px] xl:h-[300px] p-6 xl:space-y-8 '>
            <h2 className='font-bold text-[22px] lg:text-[30px] xl:text-[40px] leading-tight'>
                New Products For You
            </h2>
            <p className='text-gray-600 text-[14px] xl:text-[16px] font-bold '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className='bg-[#333] uppercase text-white text-[12px] lg:text-[16px] py-2
            xl:py-4 px-8 rounded-md hover:bg-accent '>
                shop now
            </button>

        </div>

    </div>
  )
}

export default Hero