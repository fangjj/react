/**
 * Created by jim on 2017/6/18.
 */

import React from 'react';
import List from './list';
import Add from './add';

export default () => {
    return (
        <div className="todo">
            <Add></Add>
            <List></List>
        </div>
    );
};