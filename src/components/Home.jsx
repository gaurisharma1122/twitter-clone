import React from 'react'
import Header from './Header'
import { useAppContext } from '../context/context'
import Loading from './Loading';
import Error from './Error';
import AddTweet from './AddTweet';
import Tweet from './Tweet';

const Home = () => {
    const { tweets_loading, tweets_error, tweets } = useAppContext();

    if (tweets_loading) {
        return <Loading />
    }
    if (tweets_error) {
        return <Error />
    }
    else {
        return (
            <div>
                <Header title='Home' />
                <AddTweet />
                <div>
                    {
                        tweets.map((item) => {
                            const { id, userName, date, tweet, numberOfLikes, numberOfComments, firstName } = item;
                            return <Tweet key={id}
                                id={id}
                                userName={userName}
                                date={date}
                                tweet={tweet}
                                numberOfLikes={numberOfLikes}
                                numberOfComments={numberOfComments}
                                firstName={firstName}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Home
