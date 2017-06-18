/**
 * Created by jim on 2017/6/11.
 */
import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from './Actions';
import {connect} from 'react-redux';


const Counter = (props) => {
    const counterStyle = {
        margin: '20px'
    };
    const {caption, onIncrement, onDecrement, value} = props;
    return (
        <div>
            <button style={counterStyle} onClick={onIncrement}> + </button>
            <span>{caption} count: {value}</span>
            <button style={counterStyle} onClick={onDecrement}> - </button>
        </div>
    );
};

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const value = state[ownProps.caption];
    return { value };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const onIncrement = () => {
        dispatch(Actions.increment(ownProps.caption));
    };

    const onDecrement = () => {
        dispatch(Actions.decrement(ownProps.caption));
    };
    return {
        onIncrement,
        onDecrement,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);