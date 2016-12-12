import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import logUserIn from '../actions/logUserIn'

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
    this.props.logUserIn(this.state)
  }

  render() {
    return (
    <Row>
      <Col lg={3} md={3} sm={3}>
        <h4 className="whiteText">Log In</h4>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup>
            <ControlLabel className="whiteText">Email</ControlLabel>
            <FormControl
              type="text"
              placeholder="enter email"
              onChange={this.handleEmailChange.bind(this)}/>
            <HelpBlock>Ex: you@uandme.com</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel className="whiteText">Password</ControlLabel>
            <FormControl
            type="password"
            placeholder="enter password"
            onChange={this.handlePasswordChange.bind(this)}/>
          </FormGroup>

          <Button type="submit">Login</Button>
      </form>
      </Col>
    </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
