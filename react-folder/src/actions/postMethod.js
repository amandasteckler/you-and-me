export default function postMethod(method){
  return function (dispatch) {
    if (method === "text") {
      dispatch({type: "POST_METHOD", method: "text"})
    } else if (method === "image") {
      dispatch({type: "POST_METHOD", method: "image"})
    } else if (method === "editing") {
      dispatch({type: "POST_METHOD", method: "editing"})
    }else {
      console.log("Error in posting")
    }
  }
}
