import React from 'react'
import Image from 'next/image'
import first from  "@/components/images/1.png"
function First() {
  return (
    <div className='flex items-center justify-center text-center relative overflow-hidden min-h-[70vh] sm:min-h-screen 2xl:sm:min-h-[70vh]'>
      <div>
          <h1 className='text-[130px] sm:text-[200px] xl:text-[450px] font-extrabold ring-opacity-100   text-slate-300 '>2024</h1>    
          </div>
          <Image
              src={first}
              alt='image not found'
              className="absolute left-0 right-0 ml-auto mr-auto w-[600px]"/>
    </div>
  )
}

export default First;
