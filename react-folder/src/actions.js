const ROOT_URL = 'http://localhost:3000/boards/2'
import $ from 'jquery'

export function boardRequest(id) {
  let board = $.ajax({
     url: ROOT_URL,
     type: 'GET'
    //  data: { item: item },
    //  success: () => { return{type:"FETCH_BOARD", payload: board}}
  })
  return function(dispatch) {
    board.then((data)=>{
      dispatch({type:"FETCH_BOARD", payload: data})
    })
  }
  // return {type:"FETCH_BOARD", payload: board}
}

// export function fetchVideos(searchTerm){
//   const videos = axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&key=${API_KEY}`)
//   return {
//     type: "FETCH_VIDEOS",
//     payload: videos
//   }
// }
