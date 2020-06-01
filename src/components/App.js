import React, { Fragment } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import RecordingButtons from "./RecordingButtons"


function App(){
    return <React.Fragment>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <RecordingButtons></RecordingButtons>
    </React.Fragment>
}

export default App;