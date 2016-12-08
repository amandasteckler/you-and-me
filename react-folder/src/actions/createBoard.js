import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function createBoard(boardTitle, userID) {
  return function(dispatch) {
  $.ajax({
     url: `http://localhost:3000/boards`,
     type: 'POST',
     data: { title: boardTitle, user_id: userID }
  }).done(function(response){
    dispatch({type:"UPDATE_USER_BOARDS", boards: response.boards })
    browserHistory.push('/profile')
  })
  }
}
