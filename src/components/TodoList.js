import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import Todo from './Todo'
import Label from '../styled_components/Label';



function TodoList() {
    const { todo_list } = useSelector(state => state);

    return <div>
        <Label>Todos</Label>
        {Object.keys(todo_list).map((k, i) => <React.Fragment key={i}><Todo todo={todo_list[k]} id={k}></Todo></React.Fragment>)}
        </div>
}

export default TodoList