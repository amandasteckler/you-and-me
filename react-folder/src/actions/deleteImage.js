import $ from 'jquery'

export default function deleteImage(imageID, boardID){
  return function (dispatch) {
    $.ajax({
     url: `http://localhost:3000/images/${imageID}`,
     type: 'DELETE',
     data: JSON.stringify({image: {board_id: boardID}}),
     dataType: 'json',
     contentType: 'application/json; charset=utf-8'
   }).done(function(response){
     dispatch({type:"UPDATE_IMAGES", images:response.images})
   })
  }
}
