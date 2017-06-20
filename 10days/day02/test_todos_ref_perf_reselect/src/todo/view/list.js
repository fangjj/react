/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import Item from './item';
import { connect } from 'react-redux';
import { selectTodo } from '../reselect';

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

const mapStateToProps = (state, ownProps) => {
    const todo = selectTodo(state);
    return {todo};
};

export default connect(mapStateToProps, null)(List);