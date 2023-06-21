
//initial state
const initialState = {
    counter: 0,
};

//reducer function
export const counterReducer = (state = initialState, action) => {
    console.warn(action);
    console.warn(state.counter);
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + action.data};
        case 'DECREMENT':
            return {...state, counter: state.counter - action.data};
        default:
            return state;
    }
}
