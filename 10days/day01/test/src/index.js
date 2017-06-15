import React from 'react';
import ReactDOM from 'react-dom';

import ControlPanel from './controlPanel';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));
registerServiceWorker();
