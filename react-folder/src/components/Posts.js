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

  postList(posts, currentUserID){
    let list = posts.map((post)=>{
        if (post.userID === currentUserID) {
          return (
            <div>
              <p><em>{post.userName}</em>: {post.content}</p>
              <button value ={post.id} onClick={this.handleDeletePost.bind(this)}>Delete this post</button>
            </div>)
        } else {
          return (<div><p><em>{post.userName}</em>: {post.content}</p></div>)
        }
    })
    return list
  }

  imageList(images, currentUserID){
    let list = images.map((image)=>{
        if (image.userID === currentUserID) {
          return (
            <div>
              <p><em>{image.userName}</em>:</p>
              <img src={image.url}/>
              <button value ={image.id} onClick={this.handleDeleteImage.bind(this)}>Delete this image</button>
            </div>)
        } else {
          return (
            <div>
              <p><em>{image.userName}</em>:</p>
              <img src={image.url}/>
            </div>)
        }
    })
    return list
  }

  render() {
    let posts = this.postList(this.props.posts, this.props.currentUserID)
    let images = this.imageList(this.props.images, this.props.currentUserID)
    return (
      <div>
        {posts}
        {images}
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
