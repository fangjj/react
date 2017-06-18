
import React from 'react';
import AddTodo from './addTodo.jsx';
import List from './list.jsx';

import './style.css';

export default () => {
    return (
        <div className="todo">
            <AddTodo></AddTodo>
            <List></List>
        </div>
    );
};