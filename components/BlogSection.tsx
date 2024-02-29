import React from 'react'
import BlogCard from './BlogCard'
const data=[
    {
        img:"/post_1.jpg",
        title:"lorem kdast iepr dfg",
        date:"27 Feb 2024",
        comment: 8
    },
    {
        img:"/post_2.jpg",
        title:"lorem kdast iepr dfg",
        date:"28 Feb 2024",
        comment: 3
    },
    {
        img:"/post_3.jpg",
        title:"lorem kdast iepr dfg",
        date:"29 Feb 2024",
        comment: 5
    }
]

export const BlogSection = () => {
  return (
    <div className='container pt-32'>
        <div className='font-bold text-2xl'>Latest News</div>
        <p className=' text-gray-500 '>
            All blogs are authenticated and verified
        </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
            {data.map((el) => (
                <BlogCard
                key={el.date}
                img={el.img}
                title={el.title}
                date={el.date}
                comment={el.comment}
                
                />
            ) )}

        </div>
    </div>
  )
}
