import {createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk'

import rootReducer from "./reducers";


function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(thunk))
)
export default store;
