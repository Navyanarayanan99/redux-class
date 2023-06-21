// export const increment = () => {
//     return {type: 'INCREMENT'}
// };

// export const decrement = () => {
//     return {type: 'DECREMENT'};
// };


import { DECREMENT, INCREMENT } from "./constants";

export const increment = (data) => {
    return {type: INCREMENT, data: data}
};

export const decrement = (data) => {
    return {type: DECREMENT, data: data};
};

