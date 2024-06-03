export const ActionTypes = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
};

export const incrementLike = () => ({
    type: ActionTypes.INCREMENT
});

export const decrementLike = () => ({
    type: ActionTypes.DECREMENT
});
