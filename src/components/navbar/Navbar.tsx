'use client'
import React, { useState } from 'react'
import { CiTimer } from 'react-icons/ci'
import { GiHamburgerMenu } from 'react-icons/gi'
import Sidebar from './Sidebar'
import { Sheet } from '../ui/sheet'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    
        <div className='w-full flex justify-between px-2 mt-2'>
            <div className='flex gap-2 items-center w-fit'>
                <Sidebar/>
                <span>Standard</span>
            </div>
            <div>
                <CiTimer/>
            </div>
        </div>
    </>
  )
}

export default Navbar