/**
 * Created by jim on 2017/6/17.
 */
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionType';

export default (state = [], action) => {
    let newState = {};
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
            newState = state.map(item => {
                if(item.id === action.id){
                    return {...item, completed: !item.completed};
                }else {
                    return item;
                }
            });
            break;
        case REMOVE_TODO:
            newState = state.filter(item => {
                return item.id !== action.id;
            });
            break;
        default:
            newState = state;
    }
    return newState;
};