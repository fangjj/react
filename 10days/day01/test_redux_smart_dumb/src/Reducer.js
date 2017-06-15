/**
 * Created by jim on 2017/6/11.
 */

import * as ActionTypes from './ActionTypes';


export default (state, action) => {
    const { type, caption } = action;
    let newState = {};
    switch (type) {
        case ActionTypes.INCREMENT:
            newState = {...state, [caption]: state[caption] + 1};
            break;
        case ActionTypes.DECREMENT:
            newState = {...state, [caption]: state[caption] - 1};
            break;
        default:
            newState = state;
    }
    return newState;
};