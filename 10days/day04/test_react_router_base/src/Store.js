/**
 * Created by jim on 2017/6/19.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import {routerReducer} from 'react-router-redux';
import Thunk from 'redux-thunk';
import Perf from 'react-addons-perf';

window.Perf = Perf;

//const reducer = f => f;
const reducer = combineReducers({
    routing: routerReducer,
});


let middlewares = [
    Thunk
];

if (process.env.NODE_ENV !== 'production') {
    const immutableStateInvariantMiddleware = require('redux-immutable-state-invariant');
    middlewares.push(immutableStateInvariantMiddleware.default());
}


const store = createStore(reducer, {}, composeWithDevTools(
    applyMiddleware(...middlewares)
));

export default store;