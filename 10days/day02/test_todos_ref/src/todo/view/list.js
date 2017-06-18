/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import Item from './item';

import { connect } from 'react-redux';
import {toggleTodo, removeTodo} from '../action';
import {FILTERTYPE} from '../../constant';

const List = ({todo, onToggle, onRemove}) => {
    return (
        <ul>
            {
                todo.map(item => {
                    return (
                        <Item
                            key={item.id}
                            text={item.text}
                            completed={item.completed}
                            onToggle={() => {onToggle(item.id)}}
                            onRemove={() => {onRemove(item.id)}}>
                        </Item>
                    );
                })
            }
        </ul>
    );
};

const filter = (todo, filter) => {
    let filterTodo = [];
    switch (filter){
        case FILTERTYPE.ALL:
            filterTodo = todo;
            break;
        case FILTERTYPE.COMPLETED:
            filterTodo = todo.filter( item => {
                return item.completed === true;
            });
            break;
        case FILTERTYPE.UNCOMPLETED:
            filterTodo = todo.filter( item => {
                return item.completed === false;
            });
            break;
        default:
            break;
    }
    return filterTodo;
};

const mapStateToProps = (state, ownProps) => {
    const todo = filter(state.todo, state.filter);
    return {todo};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemove: (id) => {
            dispatch(removeTodo(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);