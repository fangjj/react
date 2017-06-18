/**
 * Created by jim on 2017/6/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import TodoApp from './TodoApp';
import store from './Store.js';


ReactDOM.render(
    <Provider store={store}>
        <TodoApp></TodoApp>
    </Provider>,
    document.getElementById('root')
);