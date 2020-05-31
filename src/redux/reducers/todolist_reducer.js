import * as types from "../constants/actions"
import { combineReducers } from 'redux'


export function todolist_reducer(state = {
    id_counter: 0
}, action) {
    switch (action.type) {
    
        case "ADD_TODO":
            
            return { ...state,id_counter:state.id_counter+1 }

           
        }
  return state;
}

