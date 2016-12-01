import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/root-reducer'
import { createStore, applyMiddleware } from 'redux'

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
))
