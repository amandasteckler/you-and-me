import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import deletePost from '../actions/deletePost.js'
import deleteImage from '../actions/deleteImage'



class Posts extends Component {

  handleDeletePost(event){
    this.props.deletePost(event.target.value, this.props.currentBoardID)
  }

  handleDeleteImage(event){
    this.props.deleteImage(event.target.value, this.props.currentBoardID)
  }

  allMediaOrdered(posts, images){
    let flattened = posts.concat(images);
    flattened.sort((a, b)=>{
      a = new Date(a.createAt)
      b = new Date(b.createAt)
      return a>b ? -1 : a<b ? 1 : 0;
    });
    return flattened
  }

  formatTimeline(timeline, currentUserID){
    let list = timeline.map((status) =>{
      switch (status.type) {
        case "text":
        if (status.userID === currentUserID) {
          return (
            <div>
              <p><em>{status.userName}</em>: {status.content}</p>
              <button value ={status.id} onClick={this.handleDeletePost.bind(this)}>Delete this post</button>
            </div>)
        } else {
          return (<div><p><em>{status.userName}</em>: {status.content}</p></div>)
        }
        case "image":
        if (status.userID === currentUserID) {
          return (
            <div>
              <p><em>{status.userName}</em>:</p>
              <img src={status.url}/>
              <button value ={status.id} onClick={this.handleDeleteImage.bind(this)}>Delete this image</button>
            </div>)
        } else {
          return (
            <div>
              <p><em>{status.userName}</em>:</p>
              <img src={status.url}/>
            </div>)
        }
        default:
          return <div>Unable to render status</div>

      }
    }, this)
    return list
  }

  render() {
    let timeline = this.allMediaOrdered(this.props.posts, this.props.images)
    let timelineFormatted = this.formatTimeline(timeline, this.props.currentUserID)
    return (
      <div>
        {timelineFormatted}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deletePost, deleteImage }, dispatch)
}

function mapStateToProps(state) {
  return {posts: state.posts, images: state.images, currentBoardID: state.currentBoard.id, currentUserID: state.currentUser.id}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
