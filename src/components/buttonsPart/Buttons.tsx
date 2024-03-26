import React from 'react'
import SingleButton from './SingleButton'
import { KEY_VALUES } from '@/libs/constants'

type Props = {}

const Buttons = (props: Props) => {
  return (
    <div className='grid grid-cols-4 mx-auto gap-3 my-2 p-2'>
        {
            KEY_VALUES.map((value,index) => (
                <SingleButton
                    key={index}
                    value={value}
                />
            ))
        }
    </div>
  )
}

export default Buttons