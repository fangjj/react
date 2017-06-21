/**
 * Created by jim on 2017/6/20.
 */

import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import Store from './Store';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

import App from './pages/App';

//const history = browserHistory;
const history = syncHistoryWithStore(browserHistory, Store);

const Routes = () => {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="home" component={Home}></Route>
                <Route path="about" component={About}></Route>
                <Route path="*" component={NotFound}></Route>
            </Route>

        </Router>
    );
};

export default Routes;