/**
 * Created by jim on 2017/6/18.
 */
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionType';

export default (state = [],action) => {
    let newState = state;
    switch (action.type) {
        case ADD_TODO:
            newState = [
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                },
                ...state
            ];
            break;
        case TOGGLE_TODO:
            const id = action.id;
            newState = state.map( item => {
                if(item.id === id){
                    return {...item, completed: !item.completed};
                }else{
                    return item;
                }
            });
            break;
        case REMOVE_TODO:
            newState = state.filter( item => {
                return item.id !== action.id;
            });
            break;
        default:
            //throw new Error(`todoReducer not action ${action.type}`);
            break;
    }
    return newState;
};