import React, { Fragment } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"


function App(){
    return <React.Fragment>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
    </React.Fragment>
}

export default App;