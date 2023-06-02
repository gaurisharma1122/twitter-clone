import React, { useEffect, useState } from 'react'
import { FaTwitter } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/context';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(null);
    const navigate = useNavigate();

    const checkPassword = (password) => {
        let pattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;
        return pattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidPassword(checkPassword(password));
    };

    useEffect(() => {
        if (validPassword) {
            setTimeout(() => {
                navigate('/home');
            }, 1000);
        }
    }, [validPassword]);


    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[300px] sm:w-[500px] flex flex-col items-center'>
                <span className=''><FaTwitter className='text-4xl text-tw_blue' /></span>
                <h1 className='text-3xl font-semibold text-text_black mt-4'>Sign in to Twitter</h1>
                <hr className='mt-4 w-full' />
                <form onSubmit={handleSubmit} className='flex flex-col w-full mt-[50px]'>
                    <input type="email" placeholder='Enter your email id...' value={email} onChange={(e) => setEmail(e.target.value)}
                        className='py-2 px-4 border-solid border-2 border-gray_1 rounded-lg' required />
                    <input type='password' placeholder='Enter password...' value={password} onChange={(e) => setPassword(e.target.value)}
                        className={`py-2 px-4 border-solid border-2 border-gray_2 ${validPassword === false && 'invalid-password'} ${validPassword && 'valid-password'} rounded-lg mt-3`} required />
                    <p className={`mt-2 text-sm px-3 flex text-gray_2 ${validPassword === false && 'invalid-password'} ${validPassword && 'valid-password'}`}>
                        {validPassword ? <BsFillCheckCircleFill className='mr-2' /> : '*'} The password must contain atleast one uppercase letter, numbers and special character
                    </p>
                    <button type='submit' className='py-2 px-4 text-xl bg-text_black text-white rounded-lg mt-[40px] hover:bg-text_black_light'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Signin