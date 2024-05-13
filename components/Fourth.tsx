import React from 'react'
import Image from 'next/image'
import thirdi from "@/components/images/person.jpg"
import {PlayCircleOutlined} from "@ant-design/icons"
function Fourth() {
  return (
      <div className='mt-10 w-full h-96 rounded-xl overflow-hidden relative '>
        <Image
              src={thirdi}
          alt='listerner image of girl'
          className='h-full w-full object-cover'
      /> 
      <div className='absolute bottom-0 backdrop-blur-xl left-0 m-6 flex items-center justify-center cursor-pointer p-3 rounded-lg gap-3'>
        <PlayCircleOutlined style={{fontSize:40, color:"red"}}/>
        <div>
        <h1 className='font-bold  font-serif text-xl text-slate-600'>WATCH</h1>
          <h1 className='text-xl text-slate-600'>Intro Video</h1>
          </div>
      </div>
      </div>
  )
}

export default Fourth
