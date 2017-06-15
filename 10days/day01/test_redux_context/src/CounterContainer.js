/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import * as Actions from './Actions';
import Counter from './Counter';

class CounterContainer extends Component {
    constructor(props, context) {
        super(props, context);
        const count = this.getOwnState();
        this.state = {
            count
        };

        this.onClickDecrement = this.onClickDecrement.bind(this);
        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOwnState(){
        const counterValues = this.context.store.getState();
        const count = counterValues[this.props.caption];
        return count;
    }

    onClickDecrement() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }

    onClickIncrement() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }

    onChange() {
        const count = this.getOwnState();
        this.setState({count});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
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

CounterContainer.contextTypes = {
    store: PropTypes.object
};

export default CounterContainer;