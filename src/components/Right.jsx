import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAppContext } from '../context/context';
import Tweet from './Tweet';

const Right = () => {
    const { searchTweets, search_result } = useAppContext();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        searchTweets(searchQuery);
    };
    const handleChange= (e)=>{
        setSearchQuery(e.target.value);
        searchTweets(e.target.value)
    }

    return (
        <div className='px-4 py-4 overflow-auto sm:h-[calc(100vh-5rem)]' >
            <form onSubmit={handleSubmit} className='flex justify-between w-full border-2 border-bg_gray_2 rounded-lg overflow-hidden'>
                <input type="text" placeholder='Search Twitter...' className='py-2 md:py-4 px-2 md:px-4 text-base md:text-xl' value={searchQuery} onChange={handleChange} />
                <button type='submit' className='py-4 px-4 text-xl text-text_gray'><AiOutlineSearch /></button>
            </form>
            <div>
                {
                    search_result.length > 0 &&
                    search_result.map((item) => {
                        const { id, userName, date, tweet, numberOfLikes, numberOfComments, firstName } = item;
                        return <Tweet key={id}
                            id={id}
                            userName={userName}
                            date={date}
                            tweet={tweet}
                            numberOfLikes={numberOfLikes}
                            numberOfComments={numberOfComments}
                            firstName={firstName}
                            search={true} />
                    })
                }
            </div>
        </div>
    )
}

export default Right
