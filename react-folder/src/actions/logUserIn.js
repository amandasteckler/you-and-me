import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function logUserIn(formValues) {

  return function(dispatch) {
    // dispatch({type: 'CREATE_USER'})

    $.ajax({
     url: `http://localhost:3000/sessions`,
     type: 'POST',
     data: JSON.stringify({auth: {email: formValues.email, password: formValues.password}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(function(response){
     localStorage.setItem('jwt', response.jwt);
     dispatch({type: 'LOGIN_USER', currentUser: response.current_user})
     browserHistory.push('/profile')
   })
  }
}
