/**
 * Created by jim on 2017/6/20.
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {LOADING, SUCCESS, FAILURE} from  '../status';
const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {
    switch (status) {
        case LOADING:
            return ( <div>天气信息请求中...</div> );
        case SUCCESS:
            return (
                <div>
                    {`${cityName} ${weather} 最低气温 ${lowestTemp} 最高气温 ${highestTemp}`}
                </div>
            );
        case FAILURE:
            return ( <div>天气信息请求失败</div> );
        default:
            throw new Error(`unexpected status ${status}`);
    }
};

Weather.PropTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weather: PropTypes.string,
    lowestTemp: PropTypes.string,
    highestTemp: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
    const weatherData = state.weather;
    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2
    };
};



export default connect(mapStateToProps)(Weather);