import React from 'react';
import ReactDOM from 'react-dom';
import ControlPanel from './ControlPanel';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Store from './Store';


ReactDOM.render(
    <Provider store={Store}>
        <ControlPanel></ControlPanel>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
