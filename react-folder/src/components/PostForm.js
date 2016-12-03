import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import postStatus from '../actions/postStatus'

class PostForm extends Component {

  handleStatusChange(event){
    this.setState({content: event.target.value})
  }

  handleOnSubmit(event){
    event.preventDefault();
    let values = Object.assign({}, this.state, this.props)
    
    this.props.postStatus(values)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <label>Post a status</label>
          <input type="text" onChange={this.handleStatusChange.bind(this)}/>
          <input type="submit" value="Post" />
        </form>
      </div>
    )
  }

}

function mapStateToProps(state){
  // SELECTION WILL NEED TO CHANGE ONCE LOGIN IS COMPLETE!!!!!
  return {current_user: state.signup.current_user}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ postStatus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
