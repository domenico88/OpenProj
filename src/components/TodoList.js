import React from 'react'
import { useSelector,shallowEqual } from 'react-redux'


function TodoList() {
    const {todo_list,id_counter} = useSelector(state=>state,shallowEqual);
    
    return todo_list.map((todo,i)=><div key={i}>
        <div>{todo.name}</div>
        <div>{todo.description}</div>
    </div>)
}

export default TodoList