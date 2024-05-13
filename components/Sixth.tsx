import React from 'react'
import { EllipsisOutlined, FileTextOutlined, FundViewOutlined } from '@ant-design/icons';
function Sixth() {
  return (
    <div className='flex gap-7 flex-wrap justify-center'>
          <div className='flex justify-center items-center flex-col shadow-xl p-5 my-4  w-96 sm:w-2/5 md:w-1/4 border rounded-md border-slate-100 hover:shadow-2xl'>
              <EllipsisOutlined style={{ fontSize: '30px'}}/>
              <h1 className=' text-lg py-5 font-bold text-slate-600'>Noise Cancelling</h1>
              <p>Actively blocks external noise and uses real-time audio calibration, giving you the space you need</p>
          </div>
          <div className='flex justify-center items-center flex-col shadow-xl p-5 my-4 w-96 sm:w-2/5 md:w-1/4 border rounded-md border-slate-100 hover:shadow-2xl'>
              <FileTextOutlined style={{ fontSize: '30px'}}/>
              <h1 className=' text-lg py-5 font-bold text-slate-600'>Transparency Mode</h1>
              <p>Allows you to see the real-time audio levels of your surroundings, and to adjust the level of noise cancellation</p>
          </div>
          <div className='flex justify-center items-center flex-col shadow-xl p-5 my-4 w-96 sm:w-2/5 md:w-1/4 border rounded-md border-slate-100 hover:shadow-2xl'>
              <FundViewOutlined style={{ fontSize: '30px'}}/>
              <h1 className=' text-lg py-5 font-bold text-slate-600'>Extended Power</h1>
              <p>Extends the battery life of the device, so you can use it all day long</p>
          </div>
    </div>
  )
}

export default Sixth
