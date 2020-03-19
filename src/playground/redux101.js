import { createStore } from 'redux';

//Action Generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers are pure functions & 2. Reducers never change state or action
let result;
const add = (a, b) => {
    result = a + b;
}




const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

//Increment Count
store.dispatch(incrementCount({ incrementBy: 5 }));

//Decrement Count
store.dispatch(decrementCount({ decrementBy: 10 }));

//Reset Count
store.dispatch(resetCount());

//Set Count
store.dispatch(setCount({ count: 101 }));



//Watch Actions
/* const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
}); */

/* store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
}); */

//Reset Count
/* store.dispatch({
    type: 'RESET'
});
 */

//Decrement Count
/* store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
}); */
