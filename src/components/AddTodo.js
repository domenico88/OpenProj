import React from 'react'
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'
import moment from 'moment'
import Input from '../styled_components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddTodo() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = React.useState('');
    const [todoDescription, setTodoDescription] = React.useState('');


    return <div>
        <Input data-testid="todo-name" onChange={(e) => setTodoName(e.target.value)} placeholder="Name"></Input>
        <Input data-testid="todo-description" onChange={(e) => setTodoDescription(e.target.value)} placeholder="Description"></Input>
        <FontAwesomeIcon size={'xs'}  data-testid="Add" title={'Add'} icon={faPlus} color={'white'} cursor={'pointer'} onClick={() => dispatch({ type: types.ADD_TODO, todo: { name: todoName, description: todoDescription, creationDate: moment().format("MM/DD/YYYY") } })}/>

    </div>
}

export default AddTodo