import React from 'react'
import Navbar from '../components/Navbar'
import Left from '../components/Left'
import Center from '../components/Center'
import Right from '../components/Right'

const HomePage = () => {
  return (
    <div className='h-screen'>
      <Navbar/>
      <div className='grid sm:grid-cols-3 md:grid-cols-4' style={{ height: 'calc(100vh - 5rem)'}}>
        <div className='hidden md:block md:col-span-1'>
            <Left/>
        </div>
        <div className='sm:col-span-2'>
            <Center/>
        </div>
        <div className='col-span-1'>
            <Right/>
        </div>
      </div>
    </div>
  )
}

export default HomePage
