import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import deletePost from '../actions/deletePost.js'


class Posts extends Component {

  handleDeleteClick(event){
    this.props.deletePost(event.target.value, this.props.currentBoardID)
  }

  postList(posts, currentUserID){
    let list = posts.map((post)=>{
        if (post.userID === currentUserID) {
          return (
            <div>
              <p><em>{post.userName}</em>: {post.content}</p>
              <button value ={post.id} onClick={this.handleDeleteClick.bind(this)}>Delete this post</button>
            </div>)
        } else {
          return (<div><p><em>{post.userName}</em>: {post.content}</p></div>)
        }
    })
    return list
  }

  render() {
    let posts = this.postList(this.props.posts, this.props.currentUserID)
    return (
      <div>
        {posts}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deletePost }, dispatch)
}

function mapStateToProps(state) {
  return {posts: state.posts, currentBoardID: state.currentBoard.id, currentUserID: state.currentUser.id}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
