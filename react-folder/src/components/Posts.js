import React, {Component} from 'react'
// import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import deletePost from '../actions/deletePost.js'
import { boardRequest } from '../actions'
import $ from 'jquery'
import { done } from 'jquery'


class Posts extends Component {

  handleDeleteClick(event){
    // this.props.deletePost(event.target.value)
    // .done(boardRequest(this.props.current_board_id))
  }

  render() {
    let postList = this.props.posts.map((post)=> {
      return (
      <div>
        <p><em>{post.user_name}</em>: {post.post.content}</p>
        <button value ={post.post.id} onClick={this.handleDeleteClick.bind(this)}>Delete this post</button>
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
  // return bindActionCreators({ deletePost }, dispatch)
}

function mapStateToProps(state) {
  return {posts: state.reducer.current_board.board.posts, current_board_id: state.reducer.current_board.board.user_boards[0].board_id}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
