/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import Item from './item';
import { connect } from 'react-redux';
import {FILTERTYPE} from '../../constant';

const List = ({todo}) => {
    return (
        <ul>
            {
                todo.map(item => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            text={item.text}
                            completed={item.completed}>
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

export default connect(mapStateToProps, null)(List);