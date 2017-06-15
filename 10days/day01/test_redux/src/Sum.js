/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import Store from './Store';

class Sum extends Component {
    constructor(props){
        super(props);
        const sum = this.getOwnState();
        this.state = {
            sum,
        };
        this.onChange = this.onChange.bind(this);
    }

    getOwnState() {
        const counterValues = Store.getState();
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
        Store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        Store.unsubscribe(this.onChange);
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        );
    }
}

export default Sum;