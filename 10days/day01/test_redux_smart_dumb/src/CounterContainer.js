/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Store from './Store';
import * as Actions from './Actions';
import Counter from './Counter';

class CounterContainer extends Component {
    constructor(props) {
        super(props);
        const count = this.getOwnState();
        this.state = {
            count
        };

        this.onClickDecrement = this.onClickDecrement.bind(this);
        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState(){
        const counterValues = Store.getState();
        const count = counterValues[this.props.caption];
        return count;
    }

    onClickDecrement() {
        Store.dispatch(Actions.decrement(this.props.caption));
    }

    onClickIncrement() {
        Store.dispatch(Actions.increment(this.props.caption));
    }

    onChange() {
        const count = this.getOwnState();
        this.setState({count});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

    componentDidMount() {
        Store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        Store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <Counter caption={this.props.caption} onIncrement={this.onClickIncrement} onDecrement={this.onClickDecrement} value={this.state.count}></Counter>
        );
    }
}

CounterContainer.propTypes = {
    caption: PropTypes.string.isRequired,
};

export default CounterContainer;