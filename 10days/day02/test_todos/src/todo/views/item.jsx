/**
 * Created by jim on 2017/6/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Item = ({onToggle, onRemove, completed, text}) => {
    const completedStyle = {textDecoration : completed ? 'line-through' : 'none'};
    const checkedProp = completed ? {checked: true} : {};
    return (
        <li className="todo-item" style={completedStyle}>
            <input type="checkbox" className="todo-toggle" {...checkedProp} readOnly onClick={onToggle}/>
            <label className="todo-text">{text}</label>
            <button className="todo-remove" onClick={onRemove}>×</button>
        </li>
    );
};

Item.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Item;