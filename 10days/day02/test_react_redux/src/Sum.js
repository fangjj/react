/**
 * Created by jim on 2017/6/11.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Sum = (props) => {
    const {value} = props;
    return (
        <div>Total Count: {value}</div>
    );
};

Sum.propTypes = {
    value: PropTypes.number.isRequired,
};

const mapStateToProps = (state,ownProp) => {
    let value = 0;
    for (const key in state){
        if(state.hasOwnProperty(key)){
            value += state[key];
        }
    }
    return {value};
};


export default connect(mapStateToProps)(Sum);