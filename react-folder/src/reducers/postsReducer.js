export default function posts(state = [], action){
  switch (action.type) {
    case 'FETCH_BOARD':
      return Object.assign([], state, action.currentBoard.posts)
    case 'UPDATE_TIMELINE':
      return action.posts
    default:
      return state
  }

}
