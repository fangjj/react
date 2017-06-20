/**
 * Created by jim on 2017/6/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {toggleTodo, removeTodo} from '../action';

const Item = ({id, completed, text, onToggle, onRemove}) => {
    const checkedProp = completed ? {checked: true} : {};
    const checkedStyle = {textDecoration : completed ? 'line-through' : 'none'};
    return (
        <li className="todo-item" style={checkedStyle}>
            <input type="checkbox" className="todo-toggle" {...checkedProp} readOnly onClick={onToggle}/>
            <label className="todo-text">{text}</label>
            <button className="todo-remove" onClick={onRemove}>×</button>
        </li>
    );
};

Item.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: () => {
            dispatch(toggleTodo(ownProps.id));
        },
        onRemove: () => {
            dispatch(removeTodo(ownProps.id));
        }
    };
};

export default connect(null, mapDispatchToProps)(Item);