/**
 * Created by jim on 2017/6/20.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {autoAddTime} from '../action';

class Time extends Component {
    //constructor() {
    //    super(...arguments);
    //}

    componentDidMount() {
        this.props.autoTimer();
    }

    render() {
        return (
            <div>
                {this.props.time}
            </div>
        );
    }
}

Time.PropTypes = {
    time: PropTypes.number.isRequired,
    autoTimer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    return {
        time: state.time
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        autoTimer: () => {
            dispatch(autoAddTime());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);

