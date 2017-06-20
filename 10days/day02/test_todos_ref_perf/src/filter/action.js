/**
 * Created by jim on 2017/6/18.
 */

import {SET_FILTER} from './actionType';

export const setFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter
    };
};