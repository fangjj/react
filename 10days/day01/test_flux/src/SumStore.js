/**
 * Created by jim on 2017/6/11.
 */
import { EventEmitter } from 'events';
import CounterStore from './CountStore';
import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

const CHANGE_EVENT = 'changed';

const sum = (counterValues) => {
    let sumValue = 0;
    for(const key in counterValues){
        if(counterValues.hasOwnProperty(key)){
            sumValue += counterValues[key];
        }
    }
    return sumValue;
};

const SumStore = Object.assign(
    {},
    EventEmitter.prototype,
    {
        getSum(){
            return sum(CounterStore.getCounterValues());
        },

        emitChange(){
            this.emit(CHANGE_EVENT);
        },

        addChangeListener(callback){
            this.on(CHANGE_EVENT, callback);
        },

        removeChangeListener(callback){
            this.removeListener(CHANGE_EVENT, callback);
        }
    }
);

SumStore.dispatchToken = AppDispatcher.register(action => {
    if(action.type === ActionTypes.INCREMENT || action.type === ActionTypes.DECREMENT) {
        AppDispatcher.waitFor([CounterStore.dispatchToken]);
        SumStore.emitChange();
    }
});

export default SumStore;