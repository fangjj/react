import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(props) {
        console.log(`enter constructor ${props.caption}`);

        super(props);
        const count = props.initValue;
        this.state = {
            count,
        };

        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onClickDecrement = this.onClickDecrement.bind(this);
    }

    onClickIncrement(){
        this.updateCount(1);
    }

    onClickDecrement(){
        this.updateCount(-1);
    }

    updateCount(step){
        let count = this.state.count;
        count += step;
        this.setState({count});

        this.props.onUpdate(step);
        //this.setState 是一个异步更新state值，不能立刻读取state；shouldComponentUpdate，componentWillUpdate，render，componentDidUpdate
    }


    componentWillMount() {
        console.log(`enter componentWillMount ${this.props.caption}`);

        // 在这里调用this.setState，不会重新render
        // 所有在这里做的事情，都可以提前到constructor中
        //可以在服务端、浏览器端调用
    }

    componentDidMount() {
        console.log(`enter componentDidMount ${this.props.caption}`);

        //只能在浏览器端调用
        //render并装载到DOM树上
        //操作DOM
    }

    componentWillUpdate() {
        console.log(`enter componentWillUpdate ${this.props.caption}`);

    }

    componentDidUpdate() {
        console.log(`enter componentDidUpdate ${this.props.caption}`);

    }

    componentWillReceiveProps(nextProps) {
        console.log(`enter componentWillReceiveProps ${this.props.caption} nextProps=${JSON.stringify(nextProps)}`);

        // 只要父组件重新render，不管父组件传给子组件的props有没有改变，都会触发子组件componentWillReceiveProps
        // 组件自己更新state，是不会触发componentWillReceiveProps
        // 作用：根据收到nextProps来计算，是否要更新state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`enter shouldComponentUpdate ${this.props.caption} nextProps=${JSON.stringify(nextProps)} nextState=${JSON.stringify(nextState)}`);
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)

        //纯函数，输入确定，输出确定
        //返回true，表示更新，返回false，表示不更新，默认返回true
    }

    componentWillUnmount() {
        console.log(`enter componentDidUpdate ${this.props.caption}`);

        //销毁在componentDidMount中使用非React创造的Dom元素、定时器等进行清理，以免造成内存泄漏
    }

    render() {
        console.log(`enter render ${this.props.caption}`);

        const {caption} = this.props;
        const counterStyle = {
            margin: '20px'
        };

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
    initValue: PropTypes.number,
    onUpdate: PropTypes.func,
};

Counter.defaultProps = {
    initValue: 0,
    onUpdate: e => e
};

export default Counter;

