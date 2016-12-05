import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logUserIn } from '../actions'

class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {email: "", password: ""}
  }

  handleSubmit(event, action){
    debugger
    event.preventDefault()
    this.props.logUserIn(this.state, action.current_user.id) //this.props.user.id?
  }

  render() {
    return (

      <form>
        <label>Email</label>
        <input type="text" placeholder="enter email"/>

        <label>Password</label>
        <input type="password" placeholder="enter password"/>

        <input type="submit" />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
