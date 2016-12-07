import { browserHistory } from 'react-router'
import $ from 'jquery'

export default function boardDelete(boardID, userID) {
  return function(dispatch) {
  $.ajax({
     url: `http://localhost:3000/boards/${boardID}`,
     type: 'DELETE',
     data: { user_id: userID }
  }).done(function(response){
    dispatch({type:"UPDATE_USER_BOARDS", boards: response.boards})
    browserHistory.push('/profile')
  })
  }
}
