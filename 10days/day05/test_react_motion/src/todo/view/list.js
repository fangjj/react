/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import Item from './item';
import { connect } from 'react-redux';
import { selectTodo } from '../reselect';

import {spring, TransitionMotion} from 'react-motion';

const willLeave = () => {
    return {
        height: spring(0),
        opacity: spring(0)
    };
}

const willEnter = () => {
    return {
        height: 0,
        opacity: 0
    };
};

const getStyles = (todo) => {
    return todo.map( item => {
        return {
            key: item.id.toString(),
            data: item,
            style: {
                height: spring(60),
                opacity: spring(1)
            }
        };
    });
};

const List = ({todo}) => {
    const styles = getStyles(todo);

    return (
        <TransitionMotion willLeave={willLeave} willEnter={willEnter} styles={styles}>
            {
                interpolatedStyles => (
                    <ul>
                        {
                            interpolatedStyles.map(config => {
                                const {data, style, key} = config;
                                return (
                                    <Item
                                        key={key}
                                        id={data.id}
                                        text={data.text}
                                        completed={data.completed}
                                        style={style}>
                                    </Item>
                                );
                            })
                        }
                    </ul>
                )
            }
        </TransitionMotion>
    );
};

const mapStateToProps = (state, ownProps) => {
    const todo = selectTodo(state);
    return {todo};
};

export default connect(mapStateToProps, null)(List);