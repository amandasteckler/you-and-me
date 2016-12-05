import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logUserIn } from '../actions'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {email: "", password: ""}
  }

  handleEmailChange(event){
    this.setState({email: event.target.value})
  }

  handlePasswordChange(event){
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.logUserIn(this.state) //this.props.user.id?
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Email</label>
        <input type="text" placeholder="enter email" onChange={this.handleEmailChange.bind(this)}/>

        <label>Password</label>
        <input type="password" placeholder="enter password" onChange={this.handlePasswordChange.bind(this)}/>

        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
