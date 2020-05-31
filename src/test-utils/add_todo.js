import { fireEvent } from '@testing-library/react'
import render from './store_wrapper'
import React from 'react'
import App from '../components/App'
import '@testing-library/jest-dom'




describe('Test Todo list', () => {


  test('create todo', () => {
   
    const { getByText, getByTestId, getByRole } = render(<App />)

    //check if todo name input exists and add a name
    expect(getByTestId('todo-name').textContent).toBe("");
    fireEvent.change(getByTestId('todo-name'), { target: { value: 'new todo' } })
    expect(getByTestId('todo-name').value).toBe("new todo");

    //check if todo description input exists and add a description
    expect(getByTestId('todo-description').textContent).toBe("");
    fireEvent.change(getByTestId('todo-description'), { target: { value: 'adding new todo' } })
    expect(getByTestId('todo-description').value).toBe("adding new todo");

    //check if button add exists and fire click event
    expect(getByRole('button').textContent).toBe("Add");
    fireEvent.click(getByText('Add'))
   
    //check if element has been added after click
    expect(getByText('new todo')).toBeInTheDocument();
  })
});