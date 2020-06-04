import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'
import Todo_Div from '../styled_components/Todo_Div'


function Todo({ todo, id }) {
    const dispatch = useDispatch();
    const [todo_name, setName] = React.useState(todo.name)
    const [todo_description, setDescription] = React.useState(todo.description)
    const [is_updating, setIsUpdating] = React.useState(false)
    let todo_name_input = React.createRef();
    let todo_description_input = React.createRef();


    function focus() {
        todo_name_input.current.disabled = false;
        todo_description_input.current.disabled = false;
        todo_name_input.current.focus();
    }

    function unfocus() {
        todo_name_input.current.disabled = true;
        todo_description_input.current.disabled = true;
    }


    return <Todo_Div>
        <label >Name</label>

        <input
            disabled={true}
            ref={todo_name_input}
            onChange={(e) => setName(e.target.value)} value={todo_name}></input>

        <label>Description</label>

        <input
            disabled={true}
            ref={todo_description_input}
            onChange={(e) => setDescription(e.target.value)} value={todo_description}></input>
        <FontAwesomeIcon icon={faTrash} onClick={() => dispatch({ type: types.REMOVE_TODO, id: id })}></FontAwesomeIcon>
        {!is_updating && <FontAwesomeIcon icon={faPencilAlt} onClick={() => { focus(); setIsUpdating(true) }} style={{ marginRight: '16px' }}></FontAwesomeIcon>}
        {is_updating &&
            <FontAwesomeIcon icon={faCheck}
                onClick={() => {
                    unfocus();
                    setIsUpdating(false); dispatch({ type: types.UPDATE_TODO, payload: { [id]: { ...todo, name: todo_name, description: todo_description } } })
                }}
                style={{ marginRight: '16px' }} style={{ marginRight: '16px' }}></FontAwesomeIcon>}
    </Todo_Div>
}

export default Todo