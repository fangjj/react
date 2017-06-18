/**
 * Created by jim on 2017/6/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addTodo } from '../action';
import { connect } from 'react-redux';

class AddTodo extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        const value = this.state.value;
        if(!value.trim()){
            return;
        }
        this.props.onAdd(value);
        this.setState({
            value: ''
        });
    }

    onInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className= 'add-input' value={this.state.value} onChange={this.onInputChange} />
                    <button className="add-btn" type="submit">添加</button>
                </form>
            </div>
        );
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    };
};

export default connect(null, mapDispatchToProps)(AddTodo);
