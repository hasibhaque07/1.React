const {createStore, applyMiddleware} = require('redux');
const thunk = require('redux-thunk').default;
const {default: axios} = require('axios');

const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
const GET_TODOS_FAILED = 'GET_TODOS_FAILED';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

const getTodosRequest = () => { 
    return{
        type: GET_TODOS_REQUEST
    };
};
const getTodosFailed = (error) => {
    return{
        type: GET_TODOS_FAILED,
        paylod: error
    };
};
const getTodosSuccess = (todos) => {
    return{
        type: GET_TODOS_SUCCESS, 
        paylod: todos
    };
};

const todosReducer = (state = initialTodosState, action) => {
    switch(action.type){
        case GET_TODOS_REQUEST:
            return{
                ...state, 
                isLoading: true

            }
        case GET_TODOS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state; 
    }
}

const fetchData = () => {
    return (dispatch) =>{
        dispatch(getTodosRequest()); 
        axios.get(API_URL)
        .then((res) =>{
            const todos = res.data;
            const titles = todos.map(todo => todo.title);
            //console.log(titles);
            dispatch(getTodosSuccess(titles));
        })
        .catch((error) => {
            //console.log(error.message);
            const errorMessage = error.message;
            dispatch(getTodosFailed(errorMessage));
        })
    }
}

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(()=> {
    console.log(store.getState());
})

store.dispatch(fetchData());