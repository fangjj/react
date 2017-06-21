/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import Item from './item';
import { connect } from 'react-redux';
import { selectTodo } from '../reselect';
import TransitionGroup from 'react-addons-css-transition-group';
import './item.css';

const List = ({todo}) => {
    return (
        <ul>
            <TransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={200}>
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
            </TransitionGroup>
        </ul>
    );
};

const mapStateToProps = (state, ownProps) => {
    const todo = selectTodo(state);
    return {todo};
};

export default connect(mapStateToProps, null)(List);