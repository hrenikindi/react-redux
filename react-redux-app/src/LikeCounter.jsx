import React from 'react';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import reducer from './Reducer';
import { incrementLike, decrementLike } from './Action';

const store = createStore(reducer);

const LikeCounter = () => {
    const dispatch = useDispatch();
    const likes = useSelector((state) => state.likes);

    const handleLike = () => {
        dispatch(incrementLike());
    };

    const handleUnlike = () => {
        if(likes>0){

            dispatch(decrementLike());
        }
    };

    return (
        <div>
            <h1>Like Counter: {likes}</h1>
            <button onClick={handleLike}>Like</button>
            <button onClick={handleUnlike}>Unlike</button>
        </div>
    );
};

const App = () => (
    <Provider store={store}>
        <LikeCounter />
    </Provider>
);

export default App;
