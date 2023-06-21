import {createStore} from 'redux';
import { counterReducer } from './reducer';
// //initial state
// const initialState = {
//     counter: 0,
// };

// //reducer function
// const counterReduce = (state = initialState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             return {...state, counter: state.counter + 1};
//         case 'DECREMENT':
//             return {...state, counter: state.counter - 1};
//         default:
//             return state;
//     }
// }

//store
const store  = createStore(counterReducer);

export default store;