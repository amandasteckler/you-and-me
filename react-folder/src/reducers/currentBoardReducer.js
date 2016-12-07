export default function currentBoard(state = {id: null, title: null, users: [], userBoardID: null}, action) {

  switch (action.type) {
    case 'FETCH_BOARD':
      return {...state, current_board: action.current_board}
    // case 'SUBMIT_POST':
    //   return state
    case 'DELETE_POST':
      let newPosts = state.current_board.board.posts.filter((post)=>{
        if (post.post.id !== action.payload) {
          return post
        }
      })
      return Object.assign({}, state)
      //THIS IS WHERE YOU WERE LAST DREW -- trying to get it to return a state without the last post
    default:
      return state
  }
}
