export default function currentUser(state = {id: null, name: null, userBoardID: null}, action){

  switch (action.type) {
    // case 'CREATING_USER':
    //   return {...state, creating_user: true}
    case 'LOGIN_USER':
      return Object.assign({}, state, {id: action.currentUser.user_id, name: action.currentUser.user_name})
    case 'FETCH_BOARD':
      let userBoard = action.currentBoard.user_boards.find((userBoard) => {
        return userBoard.user_id === state.id
      })
      return Object.assign({}, state, {userBoardID: userBoard.id})
    default:
      return state
  }
}
