import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Nav extends Component {

  navList(){
    if (!!this.props.current_user) {
      return [{name: "Home", URI:"/"}, {name: "My Boards", URI: "/"}, {name: "Log Out", URI: "/"}]
    } else {
      return [{name: "Home", URI: "/"}, {name: "Login", URI: "login"}, {name:"Signup", URI:"signup"}]
    }
  }

  render(){
    let formattedLinks = this.navList().map((item)=>{
      return <p><Link to={item.URI}>{item.name}</Link></p>
    })
    return(
      <div>
        {formattedLinks}
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {current_user: state.signup.current_user}
}

export default connect(mapStateToProps)(Nav)