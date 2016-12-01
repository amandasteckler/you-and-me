import { combineReducers } from 'redux'

function reducer(state = {board: {}, posts: []}, action) {
  switch (action.type) {
    case 'FETCH_BOARD':
    debugger
    // let posts = action.payload.posts.map((array) => {
    //   array.map((postObject) => {
    //     return postObject
    //   })
    // })
    let post = action.payload.posts[0][0].content
      return Object.assign({}, state, {board: action.payload.board, posts: post})
    default:
      return state
  }
}

// const rootReducer = combineReducers({reducer})

export default reducer
