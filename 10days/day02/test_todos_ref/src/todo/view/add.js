/**
 * Created by jim on 2017/6/18.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../action';
import PropTypes from 'prop-types';

class Add extends Component {

    constructor(props, context){
        super(props, context);
        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const input = this.input;
        if(!input.value.trim()){
            return;
        }
        this.props.onAdd(input.value.trim());
        input.value ='';
    }

    refInput(node){
        this.input = node;
    }

    render() {
        return (
            <div className="todo-add">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="add-input" ref={this.refInput} />
                    <button type="submit" className="add-btn">添加</button>
                </form>
            </div>
        );
    }
}

Add.PropTypes = {
    onAdd: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
    return {};
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Add);