/**
 * Created by jim on 2017/6/19.
 */
import {createSelector} from 'reselect';
import {FILTERTYPE} from '../constant';

const getTodo = state => state.todo;
const getFilter = state => state.filter;

export const selectTodo = createSelector(
    [getTodo, getFilter],
    (todo, filter) => {
        let filterTodo = [];
        switch (filter){
            case FILTERTYPE.ALL:
                filterTodo = todo;
                break;
            case FILTERTYPE.COMPLETED:
                filterTodo = todo.filter( item => {
                    return item.completed === true;
                });
                break;
            case FILTERTYPE.UNCOMPLETED:
                filterTodo = todo.filter( item => {
                    return item.completed === false;
                });
                break;
            default:
                break;
        }
        return filterTodo;
    }
);