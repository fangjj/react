/**
 * Created by jim on 2017/6/16.
 */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        completed: false,
        id: nextTodoId++,
        text: text
    };
};

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id
    };
};

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id: id
    };
};

