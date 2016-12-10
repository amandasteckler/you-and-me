// import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function updateBoard(title, boardID, currentUserID) {
  return function(dispatch) {
  $.ajax({
     url: `http://localhost:3000/boards/${boardID}`,
     type: 'PUT',
     data: { title: title, board_id: boardID, current_user_id: currentUserID },
    //  success: () => { return{type:"FETCH_BOARD", payload: board}}
  }).done(function(response){
    dispatch({type:"UPDATE_BOARD", currentBoard: response.board})
    dispatch({type: "UPDATE_USER_BOARDS", boards: response.boards})
  })
  }
}
