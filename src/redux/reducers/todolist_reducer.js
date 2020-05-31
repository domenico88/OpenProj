import * as types from "../constants/actions"
import { combineReducers } from 'redux'


export const initialState = { id_counter: 0, todo_list: [] }


export function todolist_reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                id_counter: state.id_counter + 1,
                todo_list: [...state.todo_list,
                { id: state.id_counter, name: action.todo.name, description: action.todo.description, date: action.todo.creationDate }]
            }


    }
    return state;
}

