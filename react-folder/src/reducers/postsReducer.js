export default function posts(state = [], action){
  switch (action.type) {
    case 'FETCH_BOARD':
      return action.currentBoard.posts
    case 'UPDATE_POSTS':
      return action.posts
    default:
      return state
  }

}
