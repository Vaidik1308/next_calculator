'use client'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import { FaCalculator, FaDatabase, FaWeight } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { GrCurrency } from 'react-icons/gr'
import { PiCubeLight } from 'react-icons/pi'
import { FaArrowDownUpAcrossLine } from 'react-icons/fa6'
import { MdScience } from 'react-icons/md'

type Props = {}

const Sidebar = (props: Props) => {
    const [isOpen,setIsOpen] = useState(false)
    const pathname = usePathname()
  return (
    <Sheet >
        <SheetTrigger asChild>
            <button>
                <GiHamburgerMenu/>
            </button>
        </SheetTrigger>
        <SheetContent className='bg-gray-700 border-none  mx-0 px-0 opacity-[0.8]' side={"left"}>
            <SheetHeader className='mt-2'>
            {/* <SheetTitle></SheetTitle> */}
            {/* <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </SheetDescription> */}
            </SheetHeader>
            <div className='flex flex-col mt-8'>

                <h2 className='mx-4 font-bold'>Calculators</h2>
                <div className='w-full flex flex-col gap-4 pl-2'>
                    <Link 
                        className={`w-full flex items-center gap-6 bg-[#3E3F3F] py-2 `} 
                        href={"/"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <FaCalculator/>
                            </div>
                            <span>Standard</span>
                    </Link>
                    <Link 
                        className={`w-full flex items-center gap-6  py-2 `} 
                        href={"/c"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <MdScience/>
                            </div>
                            <span>Scientific</span>
                    </Link>
                    <Link 
                        className={`w-full flex items-center gap-6  py-2 `} 
                        href={"/c"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <FaDatabase/>
                            </div>
                            <span>Data Calculation</span>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col mt-8'>

                <h2 className='mx-4 font-bold'>Converter</h2>
                <div className='w-full flex flex-col gap-4 pl-2'>
                    <Link 
                        className={`w-full flex items-center gap-6  py-2 `} 
                        href={"/"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <GrCurrency/>
                            </div>
                            <span>Currency</span>
                    </Link>
                    <Link 
                        className={`w-full flex items-center gap-6  py-2 `} 
                        href={"/c"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <PiCubeLight/>
                            </div>
                            <span>Volume</span>
                    </Link>
                    <Link 
                        className={`w-full flex items-center gap-6  py-2 `} 
                        href={"/c"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <FaArrowDownUpAcrossLine/>
                            </div>
                            <span>Length</span>
                    </Link>
                    <Link 
                        className={`w-full flex items-center gap-6  py-2 `} 
                        href={"/c"}>
                            <div className={`flex items-center gap-2 mx-2  `}>
                                <div className='w-[4px] bg-[#FE7533] h-[24px] bg-'/>
                                <FaWeight/>
                            </div>
                            <span>Mass and Weight</span>
                    </Link>
                </div>
            </div>

        </SheetContent>
    </Sheet>
  )
}

export default Sidebar