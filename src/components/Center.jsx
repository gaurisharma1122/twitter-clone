import React from 'react'
import { useAppContext } from '../context/context'

const Center = () => {
    const { center_component }= useAppContext();
  return (
    <div className='border-0 sm:border-x-4 border-bg_gray_2 overflow-auto sm:h-[calc(100vh-5rem)]' >
      { center_component }
    </div>
  )
}

export default Center
