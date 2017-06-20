/**
 * Created by jim on 2017/6/18.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './Store.js';
import TodoApp from './TodoApp';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp></TodoApp>
    </Provider>,
    document.getElementById('root')
);
