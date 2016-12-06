import $ from 'jquery'
import { boardRequest } from '../actions'

export default function deletePost(postId){
  return function (dispatch) {
    $.ajax({
     url: `http://localhost:3000/posts/${postId}`,
     type: 'DELETE',
     data: JSON.stringify({post_id: postId}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(boardRequest(1))
  }
}


//DREW THIS IS WHERE YOU WERE WORKING LAST -- trying to get boardRequest to work and load everything correctly
