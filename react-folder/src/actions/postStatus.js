import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function postStatus(formValues){
  //formValues = {content: "hello world", current_user: 1}
  return function (dispatch) {
    $.ajax({
     url: 'http://localhost:3000/posts',
     type: 'POST',
     data: JSON.stringify({post: {content: formValues.content, user_id: formValues.current_user}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   })

   dispatch({type: 'SUBMIT_POST'}, {})

  }
}

// export function createUser(formValues) {
//   return function (dispatch) {
//     dispatch({type: 'CREATING_USER'})
//
//
//
//     $.ajax({
//      url: 'http://localhost:3000/users',
//      type: 'POST',
//      data: JSON.stringify({auth: {name: formValues.name, email: formValues.email, password: formValues.password}}),
//      dataType: 'json',
//      contentType: 'application/json; charset=utf-8'
//    }).done(function(response){
//      localStorage.setItem('jwt', response.jwt)
//      dispatch({type: 'LOGIN_USER', current_user: response.current_user})
//      browserHistory.push('/profile')
//    })
//   }
// }
