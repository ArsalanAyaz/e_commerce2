"use state"
import React from 'react';
import { Whisper } from 'next/font/google';
import { Data } from '@/utils/productData';
import { useState } from 'react';
import { useEffect } from 'react';

const MyWhisper = Whisper({ subsets: ['latin'], weight: ['400'] });

const NewArrival = () => {

const shuffleArray = (array: any) => {

    return array
    .map((value:any) => ({value, sort:Math.random()}))
    .sort((a:any, b : any) => a.sort - b.sort)
    .map(({ value } : any) => value );
};

const [data,setData]=useState([ ]);
const [selectedTab, setSelectedTab]=useState(0);

useEffect(() => {
    setData(shuffleArray(Data).slice(0,9))
}, []);


const tabsData = ["All", "Skin Care", "Lipstick", "Makeup", "Nail & Wax"];

const handleTab = (index: number) => {

  const category = tabsData[index].toLocaleLowerCase();
  setSelectedTab(index);

  if (category === "all"){
    setData(shuffleArray(Data).slice(0, 15));
    return;
  }

  const filteredData = Data.filter( (item) => 

    item.category.includes(category)
  );
  setData(shuffleArray(filteredData));
}

  return (
    <div className='container pt-32'>
      <div className="text-center">
        <h3></h3>
      </div>
    </div>
  );
};

export default NewArrival;