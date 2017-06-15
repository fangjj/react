/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CounterStore from './CountStore';
import * as Actions from './Actions';


class Counter extends Component {
    constructor(props) {
        super(props);
        const counterValues = CounterStore.getCounterValues();
        const count = counterValues[props.caption];
        this.state = {
            count
        };

        this.onClickDecrement = this.onClickDecrement.bind(this);
        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClickDecrement() {
        Actions.decrement(this.props.caption);
    }

    onClickIncrement() {
        Actions.increment(this.props.caption);
    }

    onChange() {
        const counterValues = CounterStore.getCounterValues();
        const count = counterValues[this.props.caption];
        this.setState({count});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange);
    }

    render() {
        const counterStyle = {
            margin: '20px'
        };
        const { caption } = this.props;
        return (
            <div>
                <button style={counterStyle} onClick={this.onClickIncrement}> + </button>
                <span>{caption} count: {this.state.count}</span>
                <button style={counterStyle} onClick={this.onClickDecrement}> - </button>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
};

export default Counter;