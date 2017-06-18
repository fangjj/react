import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFilter } from '../action';
import './style.css';

const Link = ({active, children, onClick}) => {
    if(active) {
        return(
            <b className="todo-filter-selected">
                {children}
            </b>
        );
    }else{
        return (
            <a href="#"
               className="todo-filter-not-selected"
               onClick={(event) => {
                    event.preventDefault();
                    onClick();
               }}
            >
                {children}
            </a>
        );
    }
};

Link.propTypes = {
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