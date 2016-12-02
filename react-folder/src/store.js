import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import signup from './reducers/root-reducer'
import { createStore, applyMiddleware } from 'redux'

export const store = createStore(signup, composeWithDevTools(
  applyMiddleware(thunk),
))
