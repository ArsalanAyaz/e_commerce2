import { Whisper } from 'next/font/google'
import React from 'react'
import CategoryCard from './CategoryCard';



const whisper = Whisper({subsets: ["latin"], weight: ["400"]})

const data =[
    {
        img:"/category_1.jpg",
        type:"Makeup",
        quantity:"(3 items)"
    },
    {
        img:"/category_2.jpg",
        type:"Nail & Wax",
        quantity:"(3 items)"
    },
    {
        img:"/category_3.jpg",
        type:"Skin Care",
        quantity:"(4 items)"
    }
];

const Category = () => {
  return (
    <div className='bg-[url(/cat_bg.jpg)] bg-no-repeat py-16 mt-32 items-center '>
        <div className='container text-center text-white '>
            <h3 className={`${whisper.className} text-[40px]`}>
                Favorite Category
            </h3>
            <h2 className='text-[40px] font-medium'>Top Category</h2>
            <div className='flex justify-center gap-4 md:gap-16 pt-8'>
                {data.map((item) => (
                    <CategoryCard
                    key={item.type}
                    img={item.img}
                    type={item.type}
                    quantity={item.quantity}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Category