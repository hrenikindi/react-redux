import { ActionTypes } from './Action';

const initialState = {
    likes: 0
};

const reducer = (state = initialState, action) => {
    const actionHandlers = {
        [ActionTypes.INCREMENT]: () => ({
            ...state,
            likes: state.likes + 1
        }),
        [ActionTypes.DECREMENT]: () => ({
            ...state,
            likes: state.likes - 1
        })
    };

    const handler = actionHandlers[action.type];
    return handler ? handler() : state;
};


export default reducer;
