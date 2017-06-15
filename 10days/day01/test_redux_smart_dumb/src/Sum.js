/**
 * Created by jim on 2017/6/11.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Sum = (props) => {
    const {value} = props;
    return (
        <div>Total Count: {value}</div>
    );
};

Sum.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Sum;