import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/context'
import Home from './Home'
import Profile from './Profile'

const Navbar = () => {
    const { setCenterComponent, logout }= useAppContext();
    const navigate= useNavigate();
    const handleLogout= ()=>{
        logout();
        navigate('/');
    };

    return (
        <nav className='h-[5rem] flex items-center justify-end px-[4rem] bg-bg_gray '>
            <div className='flex gap-[30px] items-center'>
                <span onClick={()=> setCenterComponent(<Home/>)}><AiFillHome className='text-2xl text-text_black cursor-pointer hover:text-tw_blue'/></span>
                <span onClick={()=> setCenterComponent(<Profile/>)}><FaUserAlt className='text-xl text-text_black cursor-pointer hover:text-tw_blue'/></span>
                <button onClick={handleLogout} className='py-2 px-4 text-md bg-text_black text-white rounded-lg hover:bg-text_black_light'>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
