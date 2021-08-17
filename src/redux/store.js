import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import catReducer from './catReducer';
import dogReducer from './dogReducer';
import foxReducer from './foxReducer';

let reducersPack = combineReducers({
    cat : catReducer,
    dog : dogReducer,
    fox : foxReducer
});

let store = createStore(reducersPack, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;