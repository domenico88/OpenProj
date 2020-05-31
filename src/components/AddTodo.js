import React from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'
import * as types from '../redux/constants/actions'
import moment from 'moment'

function AddTodo(){
    const dispatch=useDispatch();
    const [todoName,setTodoName]=React.useState('');
    const [todoDescription,setTodoDescription]=React.useState('');
    const { id_counter } = useSelector(state => state, shallowEqual)
    

    return <div>
         <input data-testid="todo-name" onChange={(e)=>setTodoName(e.target.value)}></input>
        <input data-testid="todo-description" onChange={(e)=>setTodoDescription(e.target.value)}></input>
        <button onClick={()=>dispatch({type:types.ADD_TODO,todo:{name:todoName,description:todoDescription,creationDate:moment().format("MM/DD/YYYY")}})}>Add</button>
       <div data-testid="id-counter">{id_counter}</div>
    </div>
}

export default AddTodo