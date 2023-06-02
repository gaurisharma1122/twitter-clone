import React from 'react'
import Header from './Header'
import { useAppContext } from '../context/context'
import Loading from './Loading';
import Error from './Error';

const Profile = () => {
    const { profile, profile_loading, profile_error } = useAppContext();

    if (profile_loading) {
        return <Loading />
    }
    if (profile_error) {
        return <Error/>
    }
    else {
        return (
            <div>
                <Header title="Profile" />
                <div className='text-text_black py-4 px-4'>
                    <h2 className='text-3xl font-semibold'>{profile.first_name} {profile.last_name}</h2>
                    <p className='text-text_gray mt-1'>{profile.email}</p>
                    <p className='text-xl mt-1'>{profile.gender}, {profile.country}</p>
                </div>
            </div>
        )
    }
}

export default Profile
