import { combineReducers } from 'redux'

function reducer(state = {board: {}, posts: []}, action) {
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

// const rootReducer = combineReducers({reducer})

export default reducer
