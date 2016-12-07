export default function currentUser(state = {id: null, name: null}, action){

  switch (action.type) {
    // case 'CREATING_USER':
    //   return {...state, creating_user: true}
    case 'LOGIN_USER':
      return Object.assign({}, state, {id: action.currentUser.user_id, name: action.currentUser.user_name})
    default:
      return state
  }
}
