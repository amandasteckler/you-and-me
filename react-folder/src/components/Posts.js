import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import deletePost from '../actions/deletePost.js'
import $ from 'jquery'
import { done } from 'jquery'


class Posts extends Component {

  handleDeleteClick(event){
    this.props.deletePost(event.target.value, this.props.currentBoardID)
  }

  render() {
    let postList = this.props.posts.map((post)=> {
      return (
      <div>
        <p><em>{post.userName}</em>: {post.content}</p>
        <button value ={post.id} onClick={this.handleDeleteClick.bind(this)}>Delete this post</button>
      </div>
      )
    })

    return (

    <div>
      {postList}
    </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ deletePost }, dispatch)
}

function mapStateToProps(state) {
  return {posts: state.posts, currentBoardID: state.currentBoard.id}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
