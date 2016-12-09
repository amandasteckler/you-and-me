import { browserHistory } from 'react-router'

export default function logUserIn(currentUserID) {
  return function(dispatch) {
    // dispatch({type: 'CREATE_USER'})

     dispatch({type: 'LOGOUT_USER'})
     browserHistory.push('/')
  }
}
