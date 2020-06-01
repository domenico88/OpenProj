import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'


function Todo({ todo, id }) {
    const dispatch = useDispatch();
    const [inputName, setInput] = React.useState(false)
    const [inputDescription, setInputDescription] = React.useState(false)
    const [todo_name, setName] = React.useState(todo.name)
    const [todo_description, setDescription] = React.useState(todo.description)

    return <div>
        {!inputName && <label onClick={() => setInput(true)}>{todo.name}</label>}
        {inputName &&
            <input autoFocus
                onBlur={() => {
                setInput(false),
                    dispatch({ type: types.UPDATE_TODO, payload: { [id]: { ...todo, name: todo_name } } })
                }} onChange={(e) => setName(e.target.value)} value={todo_name}></input>}
                
        {!inputDescription && <label onClick={() => setInputDescription(true)}>{todo.description}</label>}
        {inputDescription &&
            <input autoFocus
                onBlur={() => {
                    setInputDescription(false),
                        dispatch({ type: types.UPDATE_TODO, payload: { [id]: { ...todo, description: todo_description } } })
                }} onChange={(e) => setDescription(e.target.value)} value={todo_description}></input>}
        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch({ type: types.REMOVE_TODO, id: id })}></FontAwesomeIcon>
    </div>
}

export default Todo