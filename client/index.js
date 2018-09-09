import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, BrowserRouter} from 'react-router-dom'
import history from './history'
import storeConfigure from './store'
import App from './app'
import { PersistGate } from 'redux-persist/integration/react'
import './socket'

const { persistor, store } = storeConfigure()

const Subdomain = () => {
  return (
    <div>{subdomain[0]}</div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router history={history}>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)
