import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [thunk]
if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger')
  const loggerMiddleware = createLogger()
  middlewares.push(loggerMiddleware)
}

export default function configureStore (initialState) {
  return compose(applyMiddleware(...middlewares))(createStore)(rootReducer, initialState)
}
