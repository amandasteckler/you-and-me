export default function posts(state = [], action){
  switch (action.type) {
    case 'FETCH_BOARD':
      return Object.assign([], state, action.currentBoard.posts)
    default:
      return state
  }

}
