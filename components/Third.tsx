'use client'
import React from 'react'
import Image from 'next/image';
import thirdi from "@/components/images/2.png"
function Third() {
  return (
    <div className='flex justify-center items-center  sm:flex-row flex-col-reverse mt-16'>
        <div>
              <Image src={thirdi}
              alt='second image'/>
        </div>
        <div className='md:w-[40vw] flex flex-col gap-5'>
              <h1 className='text-4xl sm:text-5xl font-bold text-slate-600'>Immerse yourself in your music</h1> 
              <h3 className='flex gap-2 font-medium text-xl'>$199   |   Colors <div className='rounded-xl bg-red-500 border-4 cursor-pointer h-5 w-5'></div>
                  <div className='rounded-xl bg-gray-500 border cursor-pointer h-5 w-5'></div><div className='rounded-xl bg-yellow-500 cursor-pointer h-5 w-5'></div>
                  <div className='rounded-xl bg-green-500 border cursor-pointer h-5 w-5'></div>
                  <div className='rounded-xl bg-orange-500 border cursor-pointer h-5 w-5'></div>
                  <div className='rounded-xl bg-purple-500 border cursor-pointer h-5 w-5'></div>
              </h3>
              <h2 className='font-medium text-lg sm:text-xl'>With an advanced acoustic platform and noise cancelling, Solo Pro ensures you'll always have the right sound for right situation</h2>
              <div className='flex'><button className='p-5 border-red-400 border text-red-400  rounded-3xl font-serif cursor-pointer text-xl'>Buy Now</button></div> 
        </div>
    </div>
  )
}

export default Third
