import { combineReducers } from 'redux'

function reducer(state = {board: {board:{}, users:[]}, posts: []}, action) {
  switch (action.type) {
    case 'FETCH_BOARD':

    // let posts = action.payload.posts.map((array) => {
    //   array.map((postObject) => {
    //     return postObject
    //   })
    // })
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

export default combineReducers({reducer, signup})

// export default reducer
