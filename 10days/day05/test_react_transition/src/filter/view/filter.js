/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import {FILTERTYPE} from '../../constant';
import Link from './link';

const Filter = () => {
    return (
        <p className="filterTypes">
            {
                Object.keys(FILTERTYPE).map( filter => {
                    return (
                        <Link key={filter} filter={FILTERTYPE[filter]}>{FILTERTYPE[filter]}</Link>
                    );
                })
            }
        </p>
    );
};

export default Filter;