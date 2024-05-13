import React from 'react'
import Image from 'next/image'
import { BoldOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import aryan from '@/components/images/aryan.jpg'
function Nav() {
  return (
    <nav className='md:flex md:w-full p-3 md:px-14'>
          <h1 className='font-bold text-2xl text-slate-600'>Beats</h1>
          <ul className="flex gap-5 justify-center md:w-full font-bold cursor-pointer">
              <li>Home</li>
              <li>Product</li>
              <li>Feature</li>
          </ul>
          <ul className='flex gap-5 justify-end items-center'>
              <li><ShoppingCartOutlined style={{fontSize:25}} /></li>
              <li className='w-8 rounded-2xl border overflow-hidden'><Image src={aryan} alt=''/></li>
          </ul>
    </nav>
  )
}
export default Nav
