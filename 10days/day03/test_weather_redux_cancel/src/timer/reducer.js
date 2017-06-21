/**
 * Created by jim on 2017/6/20.
 */

import {ADD_TIME} from './actionType';

export default (state = 0, action) => {
    let newState = state;
    switch (action.type) {
        case ADD_TIME:
           newState++;
            break;
        default:
            break;
    }
    return newState;
};