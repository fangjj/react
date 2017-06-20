/**
 * Created by jim on 2017/6/18.
 */

import React from 'react';
import {view as Todo} from './todo/index';
import {view as Filter} from './filter/index';

const TodoApp = () => {
    return (
        <div>
            <Filter></Filter>
            <Todo></Todo>
        </div>
    );
};

export default TodoApp;