import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createUser } from '../actions'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {email: "", password: ""}
  }

  handleNameChange(event){
    this.setState({name: event.target.value})
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.createUser(this.state)
  }

  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label> Name</label>
          <input type="text" placeholder="enter name" onChange={this.handleNameChange.bind(this)}/>
          <label> Email</label>
          <input type="text" placeholder="enter email" onChange={this.handleEmailChange.bind(this)}/>
          <label> Password</label>
          <input type="password" placeholder="enter password" onChange={this.handlePasswordChange.bind(this)}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup)
