import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Provider extends Component {
    constructor(props) {
        super(props);

    }

    getChildContext() {
        const store = this.props.store;
        return {
            store,
        };
    }

    render() {
        return this.props.children;
    }
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
};

Provider.childContextTypes = {
    store: PropTypes.object
};

export default Provider;