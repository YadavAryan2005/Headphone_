import React from 'react'
import Image from "next/image";
import { WifiOutlined,FolderOpenOutlined,ClockCircleOutlined,AudioOutlined } from "@ant-design/icons";
import secondi from "@/components/images/person2.png"
function Second() {
  return (
    <>
    <center>
        <h1 className='font-bold text-2xl text-slate-600'>Solo Pro</h1>
        <h1 className='py-5 font-medium text-slate-600'>The only Headset you&apos;ll ever need.</h1>
        </center>
    <div className='w-full flex justify-center'>
      <div className='flex sm:flex-row flex-col rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl'>
        <div className='w-80'>
              <Image justyfy-center items-center
                  src={secondi}
                  alt="image for person"
                  className='overflow-hidden'
              />
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-0'>
              <div className='border flex  flex-col items-center justify-center p-5'><WifiOutlined style={{ fontSize: '30px'}}/>
              <h1 className='font-medium'>Wireless Connectivity</h1></div>
              <div className='border flex  flex-col items-center justify-center p-5'><FolderOpenOutlined style={{ fontSize: '30px'}} /><h1 className='font-medium'>Foldable Design</h1></div>
            <div className='border flex  flex-col items-center justify-center p-5'><ClockCircleOutlined style={{ fontSize: '30px' }} /><h1 className='font-medium'>Product Weight</h1>
              </div>
          <div className='border flex  flex-col items-center justify-center p-5'><AudioOutlined style={{ fontSize: '30px' }} /><h1 className='font-medium'>Microphone Feature</h1></div>
          </div>
      </div>
      </div>
      </>
  )
}

export default Second
