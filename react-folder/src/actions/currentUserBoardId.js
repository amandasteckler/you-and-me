export default function currentUserBoardId(userBoardsArray, currentUserId) {
  //takes in all user boards for current board && current user_id
  //Maps through the two user_boards and returns the ID of the one with a matching user_id to current_user_id
  let userBoard = userBoardsArray.filter((userBoard)=>{
    return userBoard.user_id === currentUserId
  })
  return userBoard[0]
  //returning a single number, need [0] because Map returns an array. Should use select?
}
