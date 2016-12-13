export default function images(state = [], action){
  switch (action.type) {
    case "FETCH_BOARD":
      return action.currentBoard.images
    case "UPDATE_IMAGES":
      debugger
      return action.images
    default:
      return state
  }
}
