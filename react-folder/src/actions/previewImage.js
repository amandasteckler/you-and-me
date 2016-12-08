import $ from 'jquery'

export default function previewImage(url) {
  debugger
  return function(dispatch) {
     dispatch({type: 'PREVIEW_IMAGE', url: url})
  }
}
