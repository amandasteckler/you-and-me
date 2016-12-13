import $ from 'jquery'

export default function submitImage(imageUrl, userBoardID) {
  return function (dispatch) {
    $.ajax({
     url: 'http://localhost:3000/images',
     type: 'POST',
     data: JSON.stringify({image: {url: imageUrl, user_board_id: userBoardID}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(
     (response) => {
       
       dispatch({type:"UPDATE_IMAGES", images: response.images});
     }
   )
  }
}
