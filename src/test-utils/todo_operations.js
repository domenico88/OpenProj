import { fireEvent } from '@testing-library/react'
import render from './wrapper'
import React from 'react'
import App from '../components/App'
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList'




describe('Test Todo Operations', () => {


  test('add todo', () => {

    const { getByTestId } = render(<App />)

    //check if todo name input exists and add a name
    expect(getByTestId('todo-name').textContent).toBe("");
    fireEvent.change(getByTestId('todo-name'), { target: { value: 'new todo' } })
    expect(getByTestId('todo-name').value).toBe("new todo");

    //check if todo description input exists and add a description
    expect(getByTestId('todo-description').textContent).toBe("");
    fireEvent.change(getByTestId('todo-description'), { target: { value: 'adding new todo' } })
    expect(getByTestId('todo-description').value).toBe("adding new todo");

    expect(getByTestId('Add')).toBeInTheDocument();

    fireEvent.click(getByTestId('Add'))

    expect(getByTestId('todo')).toBeInTheDocument();

  })

  test('modify todo', () => {

    const { getByTestId } = render(<TodoList />, {
      initialState: {
        todo_list: { 0: { id: 1, name: "test_todo", description: "todo" } }
      }
    })

    expect(getByTestId('todo')).toBeInTheDocument();
    expect(getByTestId('input_name').value).toBe("test_todo");

    fireEvent.change(getByTestId('input_name'), { target: { value: 'modified_todo' } })
    expect(getByTestId('input_name').value).toBe("modified_todo");

  })

  test('remove todo', () => {

    const { getAllByTestId } = render(<TodoList />, {
      initialState: {
        todo_list: { 
          0: { id: 0, name: "first_todo", description: "first" },
        1: { id: 1, name: "second_todo", description: "second" } }
      }
    })

    let second_trash=getAllByTestId('trash')[1];
    let second_input=getAllByTestId('input_name')[1];
    expect(second_input.value).toBe("second_todo");
   
    fireEvent.click(second_trash);

    expect(getAllByTestId('input_name')[1]).toBeUndefined()

  })
});