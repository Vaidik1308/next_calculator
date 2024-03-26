'use client'
import { useCalculatorContext } from '@/context'
import React from 'react'
import { FaTimes,FaMinus,FaPlus,FaEquals } from 'react-icons/fa'
import { FaDeleteLeft, FaDivide } from 'react-icons/fa6'
import { KeyType } from '../../../types'

type KeyProps = {
    value:KeyType
}

const SingleButton = ({value}: KeyProps) => {
  // console.log(value);
  const { handleKeyPress } = useCalculatorContext();
  const symbolsKeyboard = value === 'del' ? 
    <FaDeleteLeft size={20}/>: 
    value === 'reset' ?
    'AC' :
      value === "/" ?
      <FaDivide/>: 
        value === "x" ? 
        <FaTimes size={20}/>: 
          value==="+"?
          <FaPlus/> : 
            value === '-' ? 
            <FaMinus/> : 
              value==='='? 
              <FaEquals/> : 
                value
    const operators = ['reset', '+', '-', 'x', '=', '/','del'];
    const isOperator = operators.includes(value);
  
  return (
    <button onClick={() => handleKeyPress(value)} className={`${isOperator ? 'bg-[#181819] font-medium text-[#FF7433]': 'text-white bg-[#333233]'} font-bold flex justify-center items-center size-16 rounded-full`}>
        {symbolsKeyboard}
    </button>
  )
}

export default SingleButton