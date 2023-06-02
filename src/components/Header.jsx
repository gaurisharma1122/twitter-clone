import React from 'react'
import { BsStars } from 'react-icons/bs'

const Header = ({ title }) => {
  return (
    <div className='w-full bg-white text-2xl py-4 px-4 text-text_black flex items-center justify-between border-b-2 border-bg_gray_2'>
      {title} <BsStars className='text-tw_blue text-3xl ' />
    </div>
  )
}

export default Header
