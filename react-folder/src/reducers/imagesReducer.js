export default function images(state = [], action){
  switch (action.type) {
    case "UPDATE_IMAGES":
      return action.images
    default:
      return state
  }
}
