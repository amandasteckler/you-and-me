import { combineReducers } from 'redux'

function reducer(state = {board: {}, posts: []}, action) {
  debugger
  switch (action.type) {
    case 'FETCH_BOARD':

    // let posts = action.payload.posts.map((array) => {
    //   array.map((postObject) => {
    //     return postObject
    //   })
    // })
      let posts = action.payload.posts
      return Object.assign({}, state, {board: action.payload.board, posts: posts})
    default:
      return state
  }
}

function signup(state = {creating_user: false, current_user: null}, action){
  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}

const rootReducer = combineReducers({reducer, signup})

export default rootReducer
