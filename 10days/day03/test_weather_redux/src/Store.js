/**
 * Created by jim on 2017/6/19.
 */

import {createStore, combineReducers, applyMiddleware} from 'redux';
import { devToolsEnhancer, composeWithDevTools } from 'redux-devtools-extension';
import { reducer as weatherReducer } from './weather/index';
import { reducer as timerReducer} from './timer/index';
import Thunk from 'redux-thunk';
import Perf from 'react-addons-perf';

window.Perf = Perf;

const reducer = combineReducers({
    weather: weatherReducer,
    time: timerReducer
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