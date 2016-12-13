export default function images(state = [], action){
  switch (action.type) {
    case "FETCH_BOARD":
      return action.currentBoard.images
    case "UPDATE_IMAGES":
      return action.images
    default:
      return state
  }
}
