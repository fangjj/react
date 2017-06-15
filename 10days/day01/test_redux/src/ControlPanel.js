/**
 * Created by jim on 2017/6/11.
 */
import React, { Component } from 'react';
import Counter from './Counter';
import Sum from './Sum';

class ControlPanel extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div>
                <Counter caption="First"></Counter>
                <Counter caption="Second"></Counter>
                <Counter caption="Third"></Counter>
                <hr/>
                <Sum></Sum>
            </div>
        );
    }
}

export default ControlPanel;