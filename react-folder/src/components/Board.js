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
        <h1>{this.props.board.board_title}</h1>
        <h2>This board is between: {this.props.board.board_user_1} & {this.props.board.board_user_2}</h2>
        <PostForm />
        <Posts />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {board: state.reducer.current_board.board}
}

export default connect(mapStateToProps)(Board)
