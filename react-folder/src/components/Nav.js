import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import '../../public/media/welcome-1.jpg'

class Nav extends Component {

  navList(){
    if (this.props.currentUser.loggedIn === true) {
      return [{name: "Home", URI:"/"}, {name: "Profile", URI: "profile"}, {name: "Log Out", URI: "logout"}]
    } else {
      return [{name: "Home", URI: "/"}, {name: "Login", URI: "login"}, {name:"Signup", URI:"signup"}]
    }
  }

  render(){
    let formattedLinks = this.navList().map((item)=>{
      return <li role="presentation"><Link to={item.URI} className="whiteText"> {item.name}</Link></li>
    })
    return(
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <nav>
            <ul className="nav nav-pills">
              {formattedLinks}
            </ul>
          </nav>
        </Col>
      </Row>
    )
  }
}


function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Nav)
