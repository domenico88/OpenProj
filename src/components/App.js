import React, { Fragment } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import RecordingButtons from "./RecordingButtons"
import Wrapper from "../styled_components/Wrapper"


function App(){
    return <Wrapper>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
    </Wrapper>
}

export default App;