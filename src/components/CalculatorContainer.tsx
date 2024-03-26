import React from 'react'
import Display from './displayPart/Display'
import Buttons from './buttonsPart/Buttons'

type Props = {}

const CalculatorContainer = (props: Props) => {
  return (
    <div className='w-full p-2 flex flex-col gap-2 h-fit'>
        <div className='text-lg font-bold w-full px-2 p-1 flex justify-center items-center h-[25vh]'>
            <Display/>
        </div>
        <div className='w-full px-1 border-t-[1px] border-gray-800 '>
            <Buttons/>
        </div>
    </div>
  )
}

export default CalculatorContainer