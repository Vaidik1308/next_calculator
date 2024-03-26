"use client"
import { useCalculatorContext } from '@/context';
import React from 'react'

type Props = {}

const Display = (props: Props) => {
  const { value, expression } = useCalculatorContext();

  return (
    <div className=" flex flex-col items-end justify-center  w-full h-full overflow-y-auto  rounded-xl mb-1 p-2 ">
      <span className="text-xl text-right mb-1 opacity-60 break-words w-full">
        {expression}
      </span>
      {/* <Textfit
        className="text-skin-switcher text-right text-6xl w-full"
        mode="single"
        forceSingleModeWidth={false}
        min={30}
        max={64}
      >
        {value}
      </Textfit> */}
      <h1 className='text-5xl break-words w-full text-right'>
        {value}
      </h1>
    </div>
  );
}

export default Display