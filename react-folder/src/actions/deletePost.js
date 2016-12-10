import $ from 'jquery'
// import { boardRequest } from '../actions.js'

export default function deletePost(postID, boardID){
  return function (dispatch) {
    $.ajax({
     url: `http://localhost:3000/posts/${postID}`,
     type: 'DELETE',
     data: JSON.stringify({post: {id: postID, board_id: boardID}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(function(response){
     dispatch({type:"UPDATE_POSTS", posts: response.posts})
   })
  }
}


//DREW THIS IS WHERE YOU WERE WORKING LAST -- trying to get boardRequest to work and load everything correctly
