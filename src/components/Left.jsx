import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { useAppContext } from '../context/context'
import Home from './Home'
import Profile from './Profile'

const Left = () => {
  const { center_component, setCenterComponent } = useAppContext();
  return (
    <div className='flex items-center justify-center '>
      <div className='mt-[40px] flex flex-col'>
        <p className='flex gap-[20px] text-text_black py-2 px-4 text-xl cursor-pointer hover:bg-tw_blue hover:text-white rounded-lg '
          onClick={() => setCenterComponent(<Home />)}>
          <AiFillHome /> Home
        </p>
        <p className='flex gap-[20px] text-text_black py-2 px-4 text-xl cursor-pointer hover:bg-tw_blue hover:text-white rounded-lg mt-4'
          onClick={() => setCenterComponent(<Profile />)}>
          <FaUserAlt /> Profile
        </p>
      </div>
    </div>
  )
}

export default Left
