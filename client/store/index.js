import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import reducerList from './reducers'

import { persistStore, persistReducer } from 'redux-persist'
import localForage from 'localforage'

const persistConfig = {
  key: 'root',
  storage: localForage,
  whitelist: ['auth']
}

const reducer = combineReducers({
  ...reducerList
})

const persistedReducer = persistReducer(persistConfig, reducer)

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
// const store = createStore(reducer, middleware)
export default () => {
  let store = createStore(persistedReducer, middleware)
  let persistor = persistStore(store)
  return { store, persistor }
}
// export default store
export * from './user'
