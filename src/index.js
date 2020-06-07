import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import { todolist_reducer } from './redux/reducers/todolist_reducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { ThemeProvider } from "styled-components";
import { theme } from './styled_components/theme'
import GlobalStyle from './styled_components/GlobalStyle'

const store = createStore(todolist_reducer);
const App = React.lazy(() => import('./components/App'));

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>

    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);

if (module.hot)
  module.hot.accept();

