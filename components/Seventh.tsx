import React from 'react'
import Image from 'next/image';
import seventhi from '@/components/images/6.png';
function Seventh() {
  return (
      <div className='flex sm:flex-row flex-col justify-center sm:items-center'>
          <Image src={seventhi}
              alt='img not found'
          className='sm:w-[60vw]'/>
          <div className='sm:w-[40vw]'>
              <h1 className='text-4xl sm:text-5xl font-bold text-slate-600'>What&apos;s in the box</h1>
              <div className='flex flex-col justify-center items-start gap-4 py-5'>
                  <div className='flex justify-center items-start'>
                      <div className='w-4 h-4  rounded-xl bg-slate-400'></div>
                      <p className='pl-3'>Solo Pro wireless headphones</p>
                  </div>
                  <div className='flex justify-center items-start'>
                      <div className='w-4 h-4 rounded-xl bg-slate-400'></div>
                      <p className='pl-3'>Carrying Case</p>
                    </div>
                  <div className='flex justify-center items-start'>
                      <div className='w-4 h-4 rounded-xl bg-slate-400'></div>
                      <p className='pl-3 '>Lightning to USB-A charging cable</p>
                  </div>
                  <div className='flex justify-center items-start'>
                      <div className='w-4 h-4 rounded-xl bg-slate-400'></div>
                      <p className='pl-3'>Quick Start Guide</p>
                  </div>
                  <div className='flex justify-center items-start'>
                      <div className='w-4 h-4 rounded-xl bg-slate-400'></div>
                      <p className='pl-3'>Warranty Card</p>   
              </div>
          </div>
          </div>
    </div>
  )
}

export default Seventh
