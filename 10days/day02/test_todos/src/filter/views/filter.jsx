/**
 * Created by jim on 2017/6/17.
 */
import React from 'react';
import Link from './link.jsx';
import {FILTER} from '../../constant';

const Filter = () => {
    return (
        <p className="todo-filter">
            {
                Object.keys(FILTER).map((item, index) =>{
                    return (
                        <Link key={item} filter={FILTER[item]}> {FILTER[item]} </Link>
                    );
                })
            }
        </p>
    );
};

export default Filter;