/**
 * Created by jim on 2017/6/20.
 */

import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionType';
import 'whatwg-fetch';

export const fetchStarted = () => {
    return {
        type: FETCH_STARTED
    };
};

export const fetchSucces = (result) => {
    return {
        type: FETCH_SUCCESS,
        result
    };
};

export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error
    };
};

let nextSeqId = 0;
export const fetchWeather = (cityCode) => {
    return (dispatch, getState) => {
        const apiUrl = `/data/cityinfo/${cityCode}.html`;
        const seqId = ++nextSeqId;
        const dispatchIfValid = (action) => {
            if(seqId === nextSeqId){
                return dispatch(action);
            }
        };
        dispatchIfValid(fetchStarted());

        fetch(apiUrl).then( response => {
           if(response.status !== 200){
               throw new Error(`Fail to get response with status ${response.status}`);
           }
           response.json().then( responseJson => {
               dispatchIfValid(fetchSucces(responseJson.weatherinfo));
           }).catch( error => {
               throw new Error(`Invaild json response ${error}`);
           });
        }).catch( error => {
            dispatchIfValid(fetchFailure(error));
        });
    };
};