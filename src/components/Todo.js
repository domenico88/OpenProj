import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'
import Todo_Div from '../styled_components/Todo_Div'


function Todo({ todo, id }) {
    const dispatch = useDispatch();
    const [inputName, setInput] = React.useState(false)
    const [inputDescription, setInputDescription] = React.useState(false)
    const [todo_name, setName] = React.useState(todo.name)
    const [todo_description, setDescription] = React.useState(todo.description)

    return <Todo_Div>
        <label onClick={() => setInput(true)}>Name</label>

        <input 
            autoFocus
            onBlur={() => {
                setInput(false),
                    dispatch({ type: types.UPDATE_TODO, payload: { [id]: { ...todo, name: todo_name } } })
            }} onChange={(e) => setName(e.target.value)} value={todo_name}></input>

        <label onClick={() => setInputDescription(true)}>Description</label>

        <input autoFocus
            onBlur={() => {
                setInputDescription(false),
                    dispatch({ type: types.UPDATE_TODO, payload: { [id]: { ...todo, description: todo_description } } })
            }} onChange={(e) => setDescription(e.target.value)} value={todo_description}></input>
        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch({ type: types.REMOVE_TODO, id: id })}></FontAwesomeIcon>
    </Todo_Div>
}

export default Todo