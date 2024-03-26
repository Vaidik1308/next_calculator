'use client'
import React from 'react'
import { gsap } from 'gsap'
import {useGSAP} from '@gsap/react'

type Props = {}

const Hero = (props: Props) => {
    useGSAP(() => {
        gsap.from("#title",{
            y:"-200px",
            duration:1.2,
            opacity:0
        })
        gsap.from(".part1",{
            x:"-200px",
            duration:1.2,
            opacity:0
        })
        gsap.from(".part2",{
            x:"-50px",
            duration:1.2,
            opacity:0
        })
        gsap.from(".part3",{
            x:"100px",
            duration:1.2,
            opacity:0
        })
        gsap.from(".part4",{
            y:"100px",
            duration:1.2,
            opacity:0
        })
        
    })
  return (
    <div className=" font-bold font-reddit_mono tracking-tighter leading-12 hidden md:flex md:flex-col">
        <h1 id='title' className="font-reddit_mono text-9xl text-[#FF7433]">Cacl</h1>
        <h1 className=" part1 flex gap-3 text-5xl">
            <span>Place</span>
            <span>Where</span>
        </h1>
        <h1 className="flex gap-3 items-center   text-3xl  part1">
            <span className="mt-2 part1">You</span>
            <span className="mt-2 part1">Can</span>
            <span className="text-[#FF7433] text-6xl part2">Calculate.</span>
        </h1>
        <h1>
            <span className="text-[#FF7433] text-7xl part3">Convert.</span>
        </h1>
        <div className="flex gap-4 text-xl part4">
            <span>Std.</span>
            <span>Scientific</span>
            <span>Volume</span>
            <span>...many more</span>
        </div>
    </div>
  )
}

export default Hero