/**
 * Created by jim on 2017/6/18.
 */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';

let nextId = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextId++,
        text,
        completed: false
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id
    };
};

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    };
};