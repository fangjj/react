/**
 * Created by jim on 2017/6/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setFilter} from '../action';

const Link = ({active, children, onClick}) => {
    if(active){
        return (<b className="filter selected">{children}</b>);
    }else {
        return (
            <a href="#" className="filter not-selected" onClick={(event) => {
                    event.preventDefault();
                    onClick();
                }}>
                {children}
            </a>
        );
    }
};

Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
    const active = state.filter === ownProps.filter;
    return {active};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setFilter(ownProps.filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);