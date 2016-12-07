import React, {Component} from 'react'
import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from './Posts'
import PostForm from './PostForm'

class Board extends Component {

  render() {

    return (
      <div>
        <h1>{this.props.board.title}</h1>
        <h2>This board is between: {this.props.board.users[0].name} & {this.props.board.users[1].name}</h2>
        {/* <PostForm /> */}
        <Posts />
      </div>
    )
  }
}

function mapStateToProps(state) {
  debugger
  return {board: state.currentBoard}
}

export default connect(mapStateToProps)(Board)
