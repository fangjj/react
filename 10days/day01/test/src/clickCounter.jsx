import React, {Component} from 'react';

class ClickCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        let count = this.state.count;
        count++;
        this.setState({count});
    }

    render() {
        const counterStyle = {
            margin: '20px'
        };
        return (
            <div style={counterStyle}>
                <button onClick={this.onClickButton}>click me</button>
                <div>Click Count: {this.state.count}</div>
            </div>
        )
    }
}

export default ClickCounter;