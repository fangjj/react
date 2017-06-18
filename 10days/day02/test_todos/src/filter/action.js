/**
 * Created by jim on 2017/6/17.
 */

import { SET_FILTER } from './actionType';

export const setFilter = (FILTER) => {
    return {
        type: SET_FILTER,
        filter: FILTER
    };
};