import React, { useState } from 'react'
import { useAppContext } from '../context/context';

const AddTweet = () => {
    const { tweets, addTweet } = useAppContext();
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [tweet, setTweet] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const todayDate = new Date();
        const date = `${todayDate.getFullYear()}-${todayDate.getMonth() < 10 ? '0' + todayDate.getMonth() : todayDate.getMonth()}-${todayDate.getDate() < 10 ? '0' + todayDate.getDate() : todayDate.getDate()}`;
        const tweetObj = {
            id: tweets.length + 1,
            userName,
            date,
            tweet,
            numberOfLikes: 0,
            numberOfComments: 0,
            firstName
        };
        if (userName.trim().length > 1 && firstName.trim().length > 1 && tweet.trim().length > 1) {
            addTweet(tweetObj);
        }
        setFirstName('');
        setUserName('');
        setTweet('');
    };

    return (
        <div className='w-full border-b-2 border-bg_gray_2 px-6 py-6'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-2 md:gap-4 items-center justify-between'>
                    <input type="text" placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}
                        className='border-2 border-bg_gray_2 rounded-lg py-2 md:py-4 px-2 md:px-4 text-base md:text-xl' />
                    <input type="text" placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)}
                        className='border-2 border-bg_gray_2 rounded-lg py-2 md:py-4 px-2 md:px-4 text-base md:text-xl ' />
                </div>
                <textarea name="" rows="4" placeholder={`What's happening ?`} value={tweet} onChange={(e) => setTweet(e.target.value)}
                    className='mt-2 md:mt-4 w-full border-2 border-bg_gray_2 rounded-lg py-2 md:py-4 px-2 md:px-4 text-base md:text-xl' />
                <div className='text-right mt-2 md:mt-4'>
                    <button type='submit' className='bg-tw_blue text-right py-2 px-6 md:px-6 text-base md:text-xl text-white rounded-lg'>Tweet</button>
                </div>
            </form>
        </div>
    )
}

export default AddTweet
