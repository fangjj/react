/**
 * Created by jim on 2017/6/11.
 */
import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increment = (caption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.INCREMENT,
        caption
    });
};

export const decrement = (caption) => {
    AppDispatcher.dispatch({
        type: ActionTypes.DECREMENT,
        caption
    });
};

