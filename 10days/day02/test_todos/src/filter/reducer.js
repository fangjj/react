/**
 * Created by jim on 2017/6/17.
 */

import { SET_FILTER } from './actionType';
import { FILTER } from '../constant.js';


export default (state = FILTER.ALL, action) => {
    let newState = {};
    switch (action.type) {
        case SET_FILTER:
            newState = action.filter;
            break;
        default:
            newState = state;
    }
    return newState;
};