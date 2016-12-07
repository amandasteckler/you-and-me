import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Nav extends Component {

  navList(){
    if (!!this.props.currentUser) {
      return [{name: "Home", URI:"/"}, {name: "My Boards", URI: "/profile"}, {name: "Log Out", URI: "/"}]
    } else {
      return [{name: "Home", URI: "/"}, {name: "Login", URI: "login"}, {name:"Signup", URI:"signup"}]
    }
  }

  render(){
    let formattedLinks = this.navList().map((item)=>{
      return <li><Link to={item.URI}>{item.name}</Link></li>
    })
    return(
      <div>
        <nav>
          <ul>
            <li><Link to="/">You and Me</Link></li>
            {formattedLinks}
          </ul>
        </nav>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {current_user: state.currentUser}
}

export default connect(mapStateToProps)(Nav)
