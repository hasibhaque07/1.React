const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
const RESET = 'RESET'
const ADD_USER = 'ADD_USER';

//state
const initialState = {
    users: ['hasib'],
    count: 1
};


//action - is a object. it has 2 things. action, payload
const increamentCounter = () => {
    return {
        type: INCREMENT
    };
};
const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value
    };
};

const reset = () => {
    return {
        type: RESET
    }
}
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    };
};

//create reducer for counter
const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return{
                ...state,
               count: state.count - 1
            }
        case INCREMENT_BY_VALUE:
            return{
                ...state,
                count: state.count + action.payload
            }
        case ADD_USER:
            return{
                users: [...state.users, action.payload],
                count: state.count + 1
            }
        case RESET:
            return{
                count: 0
            }
        default:
            state;
    }
}

//store - getState(), dispatch(), suscribe()
//create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})
//dispatch action
// store.dispatch(increamentCounter());
// store.dispatch(increamentCounter());
// store.dispatch(increamentCounter());
// store.dispatch(reset());
// store.dispatch(increamentCounter());
// store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));
store.dispatch(addUser('haque'));
store.dispatch(addUser('raz'));