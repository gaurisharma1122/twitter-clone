import React, { useState } from 'react'
import { FaRegComment, FaRegHeart, FaEdit } from 'react-icons/fa'
import { BsThreeDotsVertical, BsFillTrash3Fill } from 'react-icons/bs'
import { useAppContext } from '../context/context'

const Tweet = ({ id, userName, date, tweet, numberOfLikes, numberOfComments, firstName, search }) => {
    const { deleteTweet, editTweet } = useAppContext();
    const [openOptions, setOpenOptions] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [newTweet, setNewTweet] = useState(tweet);

    const handleEdit = () => {
        setOpenOptions(false);
        setEditMode(true);
    };

    const handleDelete = () => {
        setOpenOptions(false);
        deleteTweet(id);
    };

    const handleUpdateTweet = () => {
        const newTweetObj = {
            id,
            userName,
            date,
            tweet: newTweet,
            numberOfLikes,
            numberOfComments,
            firstName
        };
        editTweet(id, newTweetObj);
        setEditMode(false);
    };

    return (
        <div className='py-6 px-6 border-b-2 border-bg_gray_2 relative'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-[10px] items-center'>
                    <h2 className='text-base md:text-xl font-bold text-text_black'>{firstName}</h2>
                    <p className='text-text_gray'>@{userName} . {date}</p>
                </div>
                {
                    !search &&
                    <span><BsThreeDotsVertical onClick={() => setOpenOptions(!openOptions)} className='text-xl cursor-pointer hover:text-tw_blue' /></span>
                }
            </div>
            <div className={`absolute top-13 right-8 border-2 border-bg_gray_2 bg-white ${!openOptions && 'hidden'}`}>
                <span className='flex gap-2 items-center text-text_black_light text-sm cursor-pointer py-2 px-4 hover:bg-bg_gray'
                    onClick={handleEdit}>
                    <FaEdit /> Edit
                </span>
                <span className='flex gap-2 items-center text-text_black_light text-sm cursor-pointer py-2 px-4 hover:bg-bg_gray'
                    onClick={handleDelete}>
                    <BsFillTrash3Fill /> Delete
                </span>
            </div>
            {
                editMode ?
                    <div>
                        <textarea name="" rows="4" value={newTweet} onChange={(e) => setNewTweet(e.target.value)}
                            className='mt-4 w-full border-2 border-bg_gray_2 rounded-lg py-4 px-4 text-xl' />
                        <div className='text-right mt-4'>
                            <button type='submit' className='bg-tw_blue text-right py-2 px-6 text-base md:text-xl text-white rounded-lg' onClick={handleUpdateTweet}>
                                Edit Tweet
                            </button>
                        </div>
                    </div> :
                    <p className='text-text_black_light mt-6 text-base md:text-xl'>{tweet}</p>
            }

            <div className='flex gap-6 items-center mt-6'>
                <span className='flex gap-1 items-center text-base md:text-xl'><FaRegHeart /> {numberOfLikes}</span>
                <span className='flex gap-1 items-center text-base md:text-xl'><FaRegComment /> {numberOfComments}</span>
            </div>
        </div>
    )
}

export default Tweet
