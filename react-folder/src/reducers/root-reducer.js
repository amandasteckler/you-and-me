import { combineReducers } from 'redux'

function reducer(state = {board: {}}, action) {
  switch (action.type) {
    case 'FETCH_BOARD':
      debugger
      return Object.assign({}, state, {board: action.payload.board})
    default:
      return state
  }
}

// const rootReducer = combineReducers({reducer})

export default reducer
