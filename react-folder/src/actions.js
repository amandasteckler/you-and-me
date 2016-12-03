import { browserHistory } from 'react-router'
import $ from 'jquery'

const ROOT_URL = 'http://localhost:3000/boards/1'


export function createUser(formValues) {
  return function (dispatch) {
    dispatch({type: 'CREATING_USER'})



    $.ajax({
     url: 'http://localhost:3000/users',
     type: 'POST',
     data: JSON.stringify({auth: {name: formValues.name, email: formValues.email, password: formValues.password}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(function(response){
     localStorage.setItem('jwt', response.jwt)
     dispatch({type: 'LOGIN_USER', current_user: response.current_user})
     browserHistory.push('/profile')
   })
  }
}

export function boardRequest(id) {
  let board = $.ajax({
     url: 'http://localhost:3000/boards/1',
     type: 'GET'
    //  data: { item: item },
    //  success: () => { return{type:"FETCH_BOARD", payload: board}}
  })
  return function(dispatch) {
    board.then((data)=>{
      dispatch({type:"FETCH_BOARD", payload: data})
    })
  }
  // return {type:"FETCH_BOARD", payload: board}
}



// export function fetchVideos(searchTerm){
//   const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`)
//   return {
//     type: "FETCH_VIDEOS",
//     payload: videos
//   }
// }
