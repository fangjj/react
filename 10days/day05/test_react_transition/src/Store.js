/**
 * Created by jim on 2017/6/18.
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';

import { reducer as todoReducer } from './todo/index';
import { reducer as filterReducer } from './filter/index';

import Perf from 'react-addons-perf'

window.Perf = Perf;

const reducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer
});

let middlewares = [];
if (process.env.NODE_ENV !== 'production') {
    const immutableStateInvariantMiddleware = require('redux-immutable-state-invariant');
    middlewares.push(immutableStateInvariantMiddleware.default());
}

const store = createStore(reducer, {todo:[{id:-1,text:'text -1',completed:false}]}, composeWithDevTools(
    applyMiddleware(...middlewares)
));

//const store = createStore(todoReducer, {}, devToolsEnhancer());

export default store;