export default function currentUserBoardId(userBoardsArray, currentUserId) {
  let userBoardId = userBoardsArray.map((userBoard)=>{
    if (userBoard.user_id === currentUserId) {
      return userBoard.id
    }
  })
  return userBoardId[0]
}
