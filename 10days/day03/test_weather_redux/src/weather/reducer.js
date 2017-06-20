/**
 * Created by jim on 2017/6/19.
 */
import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionType';
import {LOADING, SUCCESS, FAILURE} from './status';

export default (state = {status: LOADING} , action) => {
    let newState = state;
    switch (action.type) {
        case FETCH_STARTED:
            newState = {status: LOADING};
            break;
        case FETCH_SUCCESS:
            newState = {...state, status: SUCCESS, ...action.result};
            break;
        case FETCH_FAILURE:
            newState = {status: FAILURE};
            break;
        default:
            break;
    }
    return newState;
};