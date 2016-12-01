import React from 'react'
import { boardRequest } from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function Board (props) {

  function handleOnSubmit(event) {
    event.preventDefault();
    debugger
    this.props.boardRequest(1);
  }

  return (
    <div>
      <h1>blah</h1>
      <form onSubmit={handleOnSubmit.bind(this)}>
        <button >Hit ME</button>
      </form>
    </div>)

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({boardRequest: boardRequest}, dispatch)
}

function mapStateToProps(state) {
  return {board: state.board}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
