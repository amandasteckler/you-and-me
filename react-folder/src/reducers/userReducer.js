export default function currentUser(state = {id: null, name: null, userBoardID: null, loggedIn: false}, action){

  switch (action.type) {
    // case 'CREATING_USER':
    //   return {...state, creating_user: true}
    case 'LOGIN_USER':
      return Object.assign({}, state, {id: action.currentUser.user_id, name: action.currentUser.user_name, loggedIn: true})
    case 'FETCH_BOARD':
      let userBoard = action.currentBoard.user_boards.find((userBoard) => {
        return userBoard.user_id === state.id
      })
      return Object.assign({}, state, {userBoardID: userBoard.id})
    case 'LOGOUT_USER':
        return {id: null, name: null, userBoardID: null, loggedIn: false}
    case 'UPDATE_NAME':
        return Object.assign({}, state, {name: action.name})
    default:
      return state
  }
}
