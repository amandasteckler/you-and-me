import React, {Component} from 'react'
import { Row, Col, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import logUserIn from '../actions/logUserIn'

class Welcome extends Component {
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

  handleSignUp(event){
    browserHistory.push('/signup')
  }
  render(){
    return(
      <div className="spaceBottomXL">
        <Row>
          <Col lg={12}>
            <h3>An intimate social media</h3>
            <h1 className="text-center headline">u & i</h1>
          </Col>
        </Row>

        <Row className="lightBox spaceBottomM spaceTopM">
          <Col lg={6} md={6} sm={6}>
            <h4>Lorem ipsum dolor sit</h4>
            <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            <Col lg={1} md={1} sm={1} mdOffset={5} smOffset={5} lgOffset={5} className="spaceTopM">
              <Button onClick={this.handleSignUp}>Join u & me</Button>
            </Col>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <h4>Log In</h4>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="enter email"
                  onChange={this.handleEmailChange.bind(this)}/>
                <HelpBlock>Ex: you@uandme.com</HelpBlock>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                type="password"
                placeholder="enter password"
                onChange={this.handlePasswordChange.bind(this)}/>
              </FormGroup>

              <Button type="submit">Login</Button>
          </form>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ logUserIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Welcome)
