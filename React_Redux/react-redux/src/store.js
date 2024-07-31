import counterReducer from "./services/reducers/counterReducers";
import {createStore} from 'redux';

const store = createStore(counterReducer);

export default store;