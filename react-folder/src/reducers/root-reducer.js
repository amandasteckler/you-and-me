import { combineReducers } from 'redux'
import currentUser from './userReducer'
import currentBoard from './currentBoardReducer'
import boards from './boardsReducer'
import posts from './postsReducer'
import images from './imagesReducer'

export default combineReducers({boards, currentUser, currentBoard, posts, images})
