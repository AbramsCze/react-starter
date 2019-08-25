// libs
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

// others
import { configureStore } from './store'
import App from './containers/App/App'

const store = configureStore()
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
