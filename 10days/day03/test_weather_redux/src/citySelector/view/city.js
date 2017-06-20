/**
 * Created by jim on 2017/6/20.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { actions as weatherActions } from '../../weather/index';

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601,
};

class CitySelector extends Component {

    constructor() {
        super(...arguments);
        this.onChange= this.onChange.bind(this);
    }

    onChange(event){
        const cityCode = event.target.value;
        this.props.onSelectCity(cityCode);
    }

    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity]);
    }

    render() {
        return (
            <select onChange={this.onChange}>
                {
                    Object.keys(CITY_CODES).map(city => {
                        return (
                            <option key={city} value={CITY_CODES[city]}>{city}</option>
                        );
                    })
                }
            </select>
        );
    }
}

CitySelector.PropTypes = {
    onSelectCity: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSelectCity: (cityCode) => {
            dispatch(weatherActions.fetchWeather(cityCode));
        }
    };
};

export default connect(null, mapDispatchToProps)(CitySelector);