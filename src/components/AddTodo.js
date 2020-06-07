import React,{useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as types from '../redux/constants/actions'
import moment from 'moment'
import Input from '../styled_components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddTodo_Wrapper from '../styled_components/AddTodo_Wrapper'
import RecordingButtons from './RecordingButtons'
import { ThemeContext } from 'styled-components';

function AddTodo() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = React.useState('');
    const [todoDescription, setTodoDescription] = React.useState('');
    const [showRecordButtons, setShowRecordButtons] = React.useState(false);
    const { is_playing } = useSelector(state => state);
    const themeContext = useContext(ThemeContext);

    return <div>
        <Input data-testid="todo-name" onChange={(e) => setTodoName(e.target.value)} placeholder="Name" value={todoName}></Input>
        <Input data-testid="todo-description" onChange={(e) => setTodoDescription(e.target.value)} placeholder="Description" value={todoDescription}></Input>
        <AddTodo_Wrapper onMouseEnter={() => setShowRecordButtons(true)} onMouseLeave={() => setShowRecordButtons(false)} disabled={!todoName && !todoDescription}>
            <div>
                <FontAwesomeIcon
                    data-testid="Add" title={'Add'} icon={faPlus} color={(todoName && !is_playing) ? themeContext.icon.color:themeContext.icon.disabledColor}
                    cursor={'pointer'}
                    onClick={() => {
                        if (todoName && !is_playing) {
                            setTodoName('');
                            setTodoDescription('');
                            dispatch({ type: types.ADD_TODO, todo: { id: Date.now(), name: todoName, description: todoDescription, creationDate: moment().format("MM/DD/YYYY") } })
                        }
                    }} />
            </div>
            {showRecordButtons && <RecordingButtons></RecordingButtons>}
        </AddTodo_Wrapper>
    </div>
}

export default AddTodo