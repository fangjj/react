/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sum from './Sum';

class SumContainer extends Component {
    constructor(props, context) {
        super(props, context);
        const sum = this.getOwnState();
        this.state = {
            sum,
        };
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        const counterValues = this.context.store.getState();
        let sum = 0;
        for (const key in counterValues){
            if(counterValues.hasOwnProperty(key)){
                sum += counterValues[key];
            }
        }
        return sum;
    }

    onChange() {
        const sum = this.getOwnState();
        this.setState({sum});
    }

    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <Sum value={this.state.sum}></Sum>
        );
    }
}

SumContainer.contextTypes = {
    store: PropTypes.object
};

export default SumContainer;