import React from 'react'
import { FeatureCard } from './FeatureCard';

const data = [

    {
      img: "/makeup_icon.png",
      title: "Nauturally Derived",
      desc: "Natural and organic beauty product"
    },
    {
      img: "/delivery_icon.png",
      title: "Free Shipping",
      desc: "Free shipping in all orders over $99"
    },
    {
      img: "/money_icon.png",
      title: "Secure Payment",
      desc: "fully protected when paying online"
    }
    
    ];

export const Feature = () => {
  return (
    <div className='container pt-16'>
        <div className='grid md:grid-cols-2 gap-y-8 lg:gap-y-4 lg:grid-cols-3 gap-4'>
            {
                data.map(item => <FeatureCard key={item.title}
                img={item.img}
                title={item.title}
                desc={item.desc}
                />)
            }
        </div>
    </div>
  )
}
