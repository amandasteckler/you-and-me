export default function currentUserBoardId(userBoardsArray, currentUserId) {
  let userBoardId = userBoardsArray.map((userBoard)=>{
    if (userBoard.user_id === currentUserId) {
      return userBoard.id
    }
  })
  return userBoardId[0]
}

// This doesn't feel like a separate action to me, I would probably just move this method into the action creator that now calls it (see earlier refactoring pull request).
