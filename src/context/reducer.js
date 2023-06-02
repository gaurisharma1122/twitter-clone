import { ADD_TWEET, SET_CENTER_COMPONENT, TWEETS_ERROR, TWEETS_LOADING_BEGIN, TWEETS_LOADING_SUCCESS, PROFILE_LOADING_BEGIN, PROFILE_LOADING_SUCCESS, PROFILE_ERROR, DELETE_TWEET, EDIT_TWEET, SEARCH_TWEETS, LOGOUT, } from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case SET_CENTER_COMPONENT:
            {
                return { ...state, center_component: action.payload };
            }; break;
        case TWEETS_LOADING_BEGIN:
            {
                return { ...state, tweets_loading: true, tweets_error: false };
            }; break;
        case TWEETS_LOADING_SUCCESS:
            {
                return { ...state, tweets_loading: false, tweets: action.payload };
            }; break;
        case TWEETS_ERROR:
            {
                return { ...state, tweets_loading: false, tweets_error: true };
            }; break;
        case PROFILE_LOADING_BEGIN:
            {
                return { ...state, profile_loading: true, profile_error: false };
            }; break;
        case PROFILE_LOADING_SUCCESS:
            {
                return { ...state, profile_loading: false, profile: action.payload };
            }; break;
        case PROFILE_ERROR:
            {
                return { ...state, profile_loading: false, profile_error: true };
            }; break;
        case ADD_TWEET:
            {
                return { ...state, tweets: [action.payload, ...state.tweets] };
            }; break;
        case DELETE_TWEET:
            {
                let newTweets = state.tweets.filter((item) => item.id !== action.payload);
                return { ...state, tweets: newTweets };
            }; break;
        case EDIT_TWEET:
            {
                const { tweetId, newTweetObj } = action.payload;
                let newTweets = state.tweets.map((item) => {
                    if (item.id === tweetId) {
                        return newTweetObj;
                    }
                    else {
                        return item;
                    }
                });
                return { ...state, tweets: newTweets };
            }; break;
        case SEARCH_TWEETS:
            {
                let searchResults = state.tweets.filter((item) => {
                    return action.payload.trim().length > 0 && item.tweet.toLowerCase().includes(action.payload.toLowerCase());
                });
                return { ...state, search_result: searchResults };
            }; break;
        case LOGOUT:
            {
                return { ...state, search_result: [] };
            }; break;


    }
}