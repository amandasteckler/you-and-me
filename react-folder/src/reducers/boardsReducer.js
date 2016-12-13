export default function boards(state = [], action){
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign([], state, action.currentUser.boards)
    case 'UPDATE_USER_BOARDS':
      return Object.assign([], action.boards)
    case 'UPDATE_BOARD':
      return action.boards
    default:
      return state
    }
}
