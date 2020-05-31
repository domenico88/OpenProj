import { screen, fireEvent } from '@testing-library/react'
import render from './store_wrapper'
import AddTodo from './../components/AddTodo'
import React from 'react'



test('add todo', () => {


  render(<AddTodo />, {
    initialState: { id_counter: 0 },
  })

  //check if todo name input exists and add a name
  expect(screen.getByTestId('todo-name').textContent).toBe("");
  fireEvent.change(screen.getByTestId('todo-name'), { target: { value: 'new todo' } })
  expect(screen.getByTestId('todo-name').value).toBe("new todo");

  //check if todo description input exists and add a description
  expect(screen.getByTestId('todo-description').textContent).toBe("");
  fireEvent.change(screen.getByTestId('todo-description'), { target: { value: 'adding new todo' } })
  expect(screen.getByTestId('todo-description').value).toBe("adding new todo");

  //check if button add exists and fire click event
  expect(screen.getByRole('button').textContent).toBe("Add");
  fireEvent.click(screen.getByText('Add'))
  
  expect(screen.getByTestId('id-counter').textContent).toBe("1");
});