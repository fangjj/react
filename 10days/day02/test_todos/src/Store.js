/**
 * Created by jim on 2017/6/16.
 */

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { reducer as todoReducer } from './todo';
import { reducer as filterReducer } from './filter';
import Perf from 'react-addons-perf'


let win = window;
win.Perf = Perf;

const reducer = combineReducers({
        todo: todoReducer,
        filter: filterReducer
});

let middlewares = [];
if (process.env.NODE_ENV !== 'production') {
        const immutableStateInvariantMiddleware = require('redux-immutable-state-invariant');
        middlewares.push(immutableStateInvariantMiddleware.default());
}

const storeEnhancer = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
);

//export default createStore(reducer,{});
export default createStore(reducer,{},storeEnhancer);
