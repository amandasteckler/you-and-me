import React, {Component} from 'react'
import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Posts from './Posts'

class Board extends Component {

  // handleOnSubmit(event) {
  //   event.preventDefault();
  //   this.props.boardRequest(1);
  // }

  render() {
    return (
    <div>
      {/*
        <h1>blah</h1>
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <button >Hit ME</button>
      </form>

      <div>
        <h2>{this.props.board.title}</h2>
        <Posts />

      </div>*/}
    </div>)
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({boardRequest: boardRequest}, dispatch)
}

function mapStateToProps(state) {
  return {board: state.board}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
