import React from 'react'
import Image from 'next/image'
import forti from "@/components/images/3.png"
function Fifth() {
  return (
      <div className='flex flex-col sm:flex-row justify-center items-center w-full py-12'>
          <div className='sm:w-[40%]'>
          <h1 className='text-4xl sm:text-5xl font-bold text-slate-600 '>Controll your sound with listening modes</h1>
          <p className='text-xl'>With an advanced acoustic platform and noise cancelling, Solo Pro ensures youl&apos;l always have the right sound for right situation.</p>
          </div>
          <div className='flex items-center justify-center text-center relative overflow-hidden min-h-[40vh] sm:min-h-screen 2xl:sm:min-h-[60vh] sm:w-[50%]'>
        <div className='flex items-center justify-between'>
            <h1 className='text-[30vw] sm:text-[20vw] xl:text-[200px] font-extrabold ring-opacity-100 absolute text-slate-300 text-center w-full'>SOLO</h1> 
          </div>
          <Image
              src={forti}
              alt='image not found'
              className="left-0 right-0 ml-auto mr-auto w-[600px] z-20"/>
    </div>
    </div>
  )
}

export default Fifth
