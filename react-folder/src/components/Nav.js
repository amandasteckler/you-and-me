import React, {Component} from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import '../../public/media/welcome-1.jpg'

class Nav extends Component {

  navList(){
    if (this.props.currentUser.loggedIn === true) {
      return [{name: "Home", URI:"/"}, {name: "Boards", URI: "/profile"}, {name: "Profile", URI: "/profile"}, {name: "Log Out", URI: "/logout"}]
    } else {
      return [{name: "Home", URI: "/welcome"}, {name: "Login", URI: "login"}, {name:"Signup", URI:"signup"}]
    }
  }

  render(){
    let formattedLinks = this.navList().map((item)=>{
      return <li role="presentation"><Link to={item.URI}>{item.name}</Link></li>
    })
    return(
      <div>
        <nav>
          <ul className="nav nav-pills">
            {formattedLinks}
          </ul>
        </nav>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {currentUser: state.currentUser}
}

export default connect(mapStateToProps)(Nav)
