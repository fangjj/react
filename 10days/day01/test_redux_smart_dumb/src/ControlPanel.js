/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
import SumContainer from './SumContainer';

class ControlPanel extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div>
                <CounterContainer caption="First"></CounterContainer>
                <CounterContainer caption="Second"></CounterContainer>
                <CounterContainer caption="Third"></CounterContainer>
                <hr/>
                <SumContainer></SumContainer>
            </div>
        );
    }
}

export default ControlPanel;