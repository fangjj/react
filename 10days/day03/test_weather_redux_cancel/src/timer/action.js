/**
 * Created by jim on 2017/6/20.
 */

import {ADD_TIME} from './actionType';

export const addTime = () => {
    return {
        type: ADD_TIME
    };
};

export const autoAddTime = () => {
    return (dispatch, getState) => {
        setInterval( () => {
            dispatch(addTime());
        }, 1000);
    };
};