/**
 * Created by jim on 2017/6/16.
 */

import React from 'react';
import {view as Todo} from './todo';
import {view as Filter} from './filter';

const TodoApp = () => {
    return (
        <div>
            <Filter></Filter>
            <Todo></Todo>
        </div>
    );
};

export default TodoApp;