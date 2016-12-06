import { combineReducers } from 'redux'

function reducer(state = {current_board: {board_title: '', board_user_1: '', board_user_2: '', posts: []}}, action) {

  switch (action.type) {
    case 'FETCH_BOARD':
      return {...state, current_board: action.current_board}
    // case 'SUBMIT_POST':
    //   return state
    default:
      return state
  }
}

function profile(state = {creating_user: false, current_user: null}, action){
  //current_user HARDCODED TO BE 1 by Drew for board tests
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}

// function login(state = {creating_user: false, current_user: null}, action) {
//   switch (action.type) {
//     case 'LOGIN_USER':
//       return {...state, creating_user: false, current_user: action.current_user}
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({reducer, signup})

export default combineReducers({reducer, profile})

// export default reducer
