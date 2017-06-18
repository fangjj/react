/**
 * Created by jim on 2017/6/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Item from './item.jsx';
import {FILTER} from '../../constant';

import {toggleTodo, removeTodo} from '../action';

const List = ({ todo, onToggleTodo, onRemoveTodo}) => {
    return (
        <ul className="todo-list">
            {
                todo.map(item => {
                    return (
                        <Item
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            onToggle={() => onToggleTodo(item.id)}
                            onRemove={() => onRemoveTodo(item.id)}
                        >
                        </Item>
                    )
                })
            }
        </ul>
    );
};


List.propTypes = {
    todo: PropTypes.array.isRequired,
    onToggleTodo: PropTypes.func.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
};

const selectFilterTodo = (todo, filter) => {
    let filterTodo = todo;
    switch (filter) {
        case FILTER.ALL:
            filterTodo = todo;
            break;
        case FILTER.COMPLETED:
            filterTodo = todo.filter( item => item.completed);
            break;
        case FILTER.UNCOMPLETED:
            filterTodo = todo.filter( item => !item.completed);
            break;
        //default:
        //    throw new Error('unsupported filter!');
    }
    return filterTodo;
};

const mapStateToProps = (state, ownProps) => {
    const todo = selectFilterTodo(state.todo, state.filter);
    return {todo};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleTodo: id => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: id => {
            dispatch(removeTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);