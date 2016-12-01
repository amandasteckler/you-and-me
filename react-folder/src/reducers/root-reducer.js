import { combineReducers } from 'redux'

function reducer(state = {board: {}}, action) {
  switch (action.type) {
    case 'FETCH_BOARD':
      return Object.assign({}, state, {board: action.payload})
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer
