import React, {Component} from 'react'
import { Row, Col, Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
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
      <div>
        <Row>
          <Col lg={12}>
            <h3 className="whiteText headline">an intimate social media</h3>
          </Col>
        </Row>

        <Row className="spaceBottomM">
          <Col lg={6} md={6} sm={6} lgOffset={3} mdOffset={3} smOffset={3} xsOffset={3}>
            <h1 className="uandi">u & i</h1>
          </Col>
        </Row>
        <Row>
          <Col className="lightBox spaceTopM spaceBottomM" lg={4} md={4} sm={4} xs ={4} lgOffset={3} mdOffset={3} smOffset={3} xsOffset={3}>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>

                <FormControl
                  type="text"
                  placeholder="enter email"
                  onChange={this.handleEmailChange.bind(this)}/>

              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>

                <FormControl
                type="password"
                placeholder="enter password"
                onChange={this.handlePasswordChange.bind(this)}/>

              </FormGroup>

              <Button type="submit">Login</Button>
          </Form>
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
