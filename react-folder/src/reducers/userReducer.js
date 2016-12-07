export default function currentUser(state = {id: null, name: null}, action){

  switch (action.type) {
    case 'CREATING_USER':
      return {...state, creating_user: true}
    case 'LOGIN_USER':
      return {...state, creating_user: false, current_user: action.current_user}
    default:
      return state
  }
}
