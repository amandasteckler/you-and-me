import { combineReducers } from 'redux'

function reducer(state = {}, action) {
  switch (action.type) {
    case 'true':
      return "blah"

    default:
      return state
  }
}

const rootReducer = combineReducers({reducer})

export default rootReducer
