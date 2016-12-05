import { combineReducers } from 'redux'

function reducer(state = {board: {board:{}, users:[], user_board: {}}, posts: []}, action) {
  switch (action.type) {
    case 'FETCH_BOARD':
      let posts = action.payload.posts
      return Object.assign({}, state, {board: action.payload.board, posts: posts})
    case 'SUBMIT_POST':
      return state
    default:
      return state
  }
}

function signup(state = {creating_user: false, current_user: 1}, action){
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

function login(state = {creating_user: false, current_user:null}, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}

// const rootReducer = combineReducers({reducer, signup})

export default combineReducers({reducer, signup, login})

// export default reducer
