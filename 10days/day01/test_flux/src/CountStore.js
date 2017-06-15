/**
 * Created by jim on 2017/6/11.
 */
import { EventEmitter } from 'events';
import AppDispatcher from './AppDispatcher';
import * as ActionType from './ActionTypes';

const First = 0;
const Second = 10;
const Third = 30;
const CHANGE_EVENT = 'changed';

const counterValues = {
    First,
    Second,
    Third,
};

const CounterStore = Object.assign(
    {},
    EventEmitter.prototype,
    {
        getCounterValues(){
            return counterValues;
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

CounterStore.dispatchToken = AppDispatcher.register(action => {
    if(action.type === ActionType.INCREMENT) {
        counterValues[action.caption]++;
        CounterStore.emitChange();
    }else if(action.type === ActionType.DECREMENT) {
        counterValues[action.caption]--;
        CounterStore.emitChange();
    }
});

export default CounterStore;