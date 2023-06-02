import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import Home from "../components/Home";
import { SET_CENTER_COMPONENT, TWEETS_ERROR, TWEETS_LOADING_SUCCESS, TWEETS_LOADING_BEGIN, ADD_TWEET, DELETE_TWEET, EDIT_TWEET, PROFILE_LOADING_BEGIN, PROFILE_LOADING_SUCCESS, PROFILE_ERROR, SEARCH_TWEETS, LOGOUT } from "./actions";

const AppContext = createContext();

const initialState = {
    center_component: <Home />,
    tweets: [],
    tweets_loading: true,
    tweets_error: false,
    profile: {},
    profile_loading: true,
    profile_error: false,
    search_result: []
};

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const setCenterComponent = (component) => {
        dispatch({ type: SET_CENTER_COMPONENT, payload: component });
    };

    const fetchTweets = () => {
        dispatch({ type: TWEETS_LOADING_BEGIN });
        fetch('https://tweets.free.beeceptor.com/tweets/all')
            .then(response => response.json())
            .then(respData => {
                dispatch({ type: TWEETS_LOADING_SUCCESS, payload: respData });
            })
            .catch(error => {
                dispatch({ type: TWEETS_ERROR });
            })
    };

    const fetchProfile = () => {
        dispatch({ type: PROFILE_LOADING_BEGIN });
        fetch('https://tweets.free.beeceptor.com/profile')
            .then(response => response.json())
            .then(respData => {
                dispatch({ type: PROFILE_LOADING_SUCCESS, payload: respData });
            })
            .catch(error => {
                dispatch({ type: PROFILE_ERROR });
            })
    };

    const addTweet = (tweetObj) => {
        dispatch({ type: ADD_TWEET, payload: tweetObj });
    };
    const deleteTweet = (tweetId) => {
        dispatch({ type: DELETE_TWEET, payload: tweetId });
    };
    const editTweet = (tweetId, newTweetObj) => {
        dispatch({ type: EDIT_TWEET, payload: { tweetId, newTweetObj } });
    };
    const searchTweets = (searchQuery) => {
        dispatch({ type: SEARCH_TWEETS, payload: searchQuery });
    };
    const logout = () => {
        dispatch({ type: LOGOUT });
        fetchTweets();
    };

    useEffect(() => {
        fetchTweets();
        fetchProfile();
    }, []);

    return (
        <AppContext.Provider value={{ ...state, setCenterComponent, addTweet, deleteTweet, editTweet, searchTweets, logout }}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;

export const useAppContext = () => {
    return useContext(AppContext);
}