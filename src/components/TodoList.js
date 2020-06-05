import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
import Label from '../styled_components/Label';



function TodoList() {
    const { todo_list, is_recording, is_playing } = useSelector(state => state);

    let status = () => {
        if (is_recording)
            return 'Todos (Recording)'
        if (is_playing)
            return 'Todos (Playing)'
        return 'Todos'
    }

    return <div>
        <Label>{status()} </Label>
        {Object.keys(todo_list).map((k, i) => <React.Fragment key={i}><Todo todo={todo_list[k]} id={k}></Todo></React.Fragment>)}
    </div>
}

export default TodoList