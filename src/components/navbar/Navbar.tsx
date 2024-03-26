'use client'
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import logo from '../../../public/logo.png'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    
        <div className='w-full flex justify-between px-2 mt-2 '>
            <div className='flex gap-2 items-center w-fit text-2xl'>
                <Sidebar/>
                <span className=''>Standard</span>
            </div>
            <div className='text-2xl mt-1'>
                {/* <div className='relative top-9 -mt-2 h-[220px] w-[220px]'>
                    <Image alt=''
                     src={logo} fill className='absolute'/>
                </div> */}
                <span className='text-[#FF7433] font-bold '>CALCI</span>
            </div>
        </div>
    </>
  )
}

export default Navbar