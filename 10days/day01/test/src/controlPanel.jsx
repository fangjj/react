/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import Counter from './counter';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.initValues = [0, 10, 20];
        const sum = this.initValues.reduce((a, b) => a + b, 0);
        this.state = {
            sum
        };

        this.onCounterUpdate = this.onCounterUpdate.bind(this);
    }

    onCounterUpdate (step) {
        let sum = this.state.sum;
        sum += step;
        this.setState({sum});
    }


    render() {
        console.log(`enter render ControlPanel`);
        return (
            <div>
                <Counter caption="First"  onUpdate={this.onCounterUpdate} initValue={this.initValues[0]}></Counter>
                <Counter caption="Second" onUpdate={this.onCounterUpdate} initValue={this.initValues[1]}></Counter>
                <Counter caption="Third"  onUpdate={this.onCounterUpdate} initValue={this.initValues[2]}></Counter>
                <button onClick={ () => this.forceUpdate() }> forceUpdate </button>
                <hr/>
                <div>Total Count: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;