/**
 * Created by jim on 2017/6/20.
 */

import React from 'react';
import {view as TopMenu} from '../menu/index';

const App = ({children}) => {
    return (
        <div>
            <TopMenu></TopMenu>
            <div>
                {children}
            </div>
        </div>
    );
};

export default App;