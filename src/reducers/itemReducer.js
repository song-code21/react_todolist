import {ADD_TO_LIST, CHECK_DONE, REMOVE_FROM_LIST} from '../actions';
import initialState from './initialState'

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_LIST: 
        return state.concat(action.todo)
        
        case REMOVE_FROM_LIST: 
        return state.filter(el => el.id !== action.todo.id)

        case CHECK_DONE:
        const index = state.findIndex(el => el.id === action.todo.id)
        const newArr = [...state]
        newArr[index].done = action.todo.done
        return newArr
        
        default: return state
    }
}

export default itemReducer;