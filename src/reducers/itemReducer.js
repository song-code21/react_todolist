import {Add_To_List, Remove_From_List} from '../actions';
import initialState from './initialState'

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case Add_To_List: 
        return [...state, action.item]
        
        case Remove_From_List: 
        return state.filter(el => el.id !== action.payload.id)

        default: return state
    }
}

export default itemReducer;