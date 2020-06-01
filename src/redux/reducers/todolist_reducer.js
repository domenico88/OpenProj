import * as types from "../constants/actions"


export const initialState = { id_counter: 0, todo_list: {} }


export function todolist_reducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                id_counter: state.id_counter + 1,
                todo_list: {
                    ...state.todo_list,
                    [state.id_counter]: { name: action.todo.name, description: action.todo.description, date: action.todo.creationDate }
                }
            }

        case types.REMOVE_TODO:
            delete state.todo_list[action.id]
            return {
                ...state,
                todo_list: state.todo_list
            }

        case types.UPDATE_TODO:
           
            return {
                ...state,
                todo_list: {...state.todo_list,...action.payload}
            }


    }
    return state;
}

