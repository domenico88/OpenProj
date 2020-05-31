import {render as rtlRender} from '@testing-library/react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import React from 'react'
import {todolist_reducer}  from './../redux/reducers/todolist_reducer'

  
export default function render(
    ui,
    {
      initialState = initialReducerState,
      store = createStore(todolist_reducer, initialState),
      ...renderOptions
    } = {},
  ) {
   
    function Wrapper({children}) {
      return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
  }

