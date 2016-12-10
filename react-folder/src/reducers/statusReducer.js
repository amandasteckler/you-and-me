export default function status(state = {method: null}, action){
  switch (action.type) {
    case 'POST_METHOD':
      return {method: action.method}
    default:
      return state
  }
}
