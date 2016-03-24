import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './styles/core.scss'
import matrixApp from './reducers'
import { App } from './containers'

let store = createStore(matrixApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
