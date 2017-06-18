/**
 * Created by jim on 2017/6/11.
 */
import * as ActionTypes from './ActionTypes';

export const increment = (caption) => {
    return {
        type: ActionTypes.INCREMENT,
        caption
    };
};

export const decrement = (caption) => {
    return {
        type: ActionTypes.DECREMENT,
        caption
    };
};


