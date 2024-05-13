import React from 'react'
import {LinkedinOutlined,TwitterOutlined} from "@ant-design/icons";
function Footer() {
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='w-full border'></div>
            <h1 className='text-3xl md:text-3xl font-bold my-5 text-slate-600'>Say Hello to us</h1> 
        <div className='p-1 flex border rounded-3xl w-full sm:w-1/3 justify-between overflow-hidden pl-5'><input className=" outline-none flex w-full" type="text" name="" id="" placeholder='Enter your email' /> <button className='flex bg-red-500 rounded-3xl px-4 py-2 text-white  font-bold justify-center'>Send</button></div>
        <div className='w-full flex flex-col gap-3 sm:flex-row justify-center py-5'>
          <a href="#" className='w-full flex justify-center sm:justify-start font-bold text-slate-600'>About us   |  Privacy Policy   |  Contact us</a>
          <h1 className='w-full flex justify-center text-slate-600'>Copyright © 2024- Aryan</h1>
          <h1 className='w-full flex justify-center sm:justify-end gap-5'><LinkedinOutlined  style={{fontSize:30}}/><TwitterOutlined style={{fontSize:30}} /></h1>
        </div>
    </div>
  )
}

export default Footer
