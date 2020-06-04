import React from 'react'
import { useDispatch } from 'react-redux'
import * as types from '../redux/constants/actions'
import moment from 'moment'
import Input from '../styled_components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTodo_Wrapper from '../styled_components/AddTodo_Wrapper'
import RecordingButtons from './RecordingButtons'


function AddTodo() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = React.useState('');
    const [todoDescription, setTodoDescription] = React.useState('');
    const [showRecordButtons, setShowRecordButtons] = React.useState(false);


    return <div>
        <Input data-testid="todo-name" onChange={(e) => setTodoName(e.target.value)} placeholder="Name"></Input>
        <Input data-testid="todo-description" onChange={(e) => setTodoDescription(e.target.value)} placeholder="Description"></Input>
        <AddTodo_Wrapper onMouseEnter={() => setShowRecordButtons(true)} onMouseLeave={() => setShowRecordButtons(false)}>
            <FontAwesomeIcon
              
                data-testid="Add" title={'Add'} icon={faPlus} color={'white'}
                cursor={'pointer'}
                onClick={() => dispatch({ type: types.ADD_TODO, todo: { name: todoName, description: todoDescription, creationDate: moment().format("MM/DD/YYYY") } })} />
            {showRecordButtons && <RecordingButtons></RecordingButtons>}
        </AddTodo_Wrapper>
    </div>
}

export default AddTodo