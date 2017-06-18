/**
 * Created by jim on 2017/6/18.
 */
import {SET_FILTER} from './actionType';
import {FILTERTYPE} from '../constant';

export default (state = FILTERTYPE.ALL, action) => {
    let newState = state;
    switch (action.type) {
        case SET_FILTER:
            newState = action.filter;
            break;
        default:
            break;
    }
    return newState;
}