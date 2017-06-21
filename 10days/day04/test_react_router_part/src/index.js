import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <Routes />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
