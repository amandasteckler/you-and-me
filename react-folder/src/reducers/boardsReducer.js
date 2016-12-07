export default function boards(state = [], action){
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign([], state, action.currentUser.boards)
    default:
      return state
    }
}
