/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import SumStore from './SumStore';

class Sum extends Component {
    constructor(props){
        super(props);
        const sum = SumStore.getSum();
        this.state = {
            sum,
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        const sum = SumStore.getSum();
        this.setState({sum});
    }

    componentDidMount() {
        SumStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        SumStore.removeChangeListener(this.onChange);
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        );
    }
}

export default Sum;