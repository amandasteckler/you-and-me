import React from 'react';
import Dropzone from 'react-dropzone'
import { request } from 'superagent'

export default class MyDropZone extends React.Component {
  constructor(props){
    super(props)
    this.state = {files: []}
  }
  onDrop(acceptedFiles) {
    this.setState({
      files: acceptedFiles
    });
  }
  onOpenClick() {
    debugger
    this.dropzone.open();
    debugger
  }
  onSubmitClick() {
    //this should persist the image to the database or the state
    this.state.files
  }

    render() {
      debugger
        return (
            <div>
                <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop.bind(this)}>
                    <div>Drop your files here</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick.bind(this)}>
                  Upload
                </button>
                <button type="button" onSubmit={this.onSubmitClick.bind(this)}>
                  Post Image
                </button>
                {this.state.files.length > 0 ? <div>
                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                </div> : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {files: state.files}
}

// export default connect(mapStateToProps)(Images)


// Need to create a model for images CHECK
// Need to create a controller with a create action and send you back a response of that saved image.
// Then we need to use superagent - npm install superagent CHECK
// in the MyDropZone component import { request } from 'superagent' CHECK
// request.post()
// request
//   .post('/images')
//   .attach('name of image', 'path/to/tobi.png', 'user.png')

//need to add a table for images (what are their params) CHECK
  //url
  //

// byebug
  // images#create
  //



  //import createUser from ./actions

  // { this.props.users ? users : null }

  // connect({users: state.users}, {createUser: createUser})(Users)

  // go to actions, import $ from 'jquery'
    // function createUser () {
    //   return function(dispatch) {
    //     dispatch(type: 'FETCHING USERS')
    //     $.get({url: 'localhost:3000/users', dataType: 'json'}).done(function(response){
    //       //{users}
    //
    //       dispatch(type: "SET_USERS", payload: response)
    //     }
    //   }
    // }


    //reducer

      //function users(state, action) {
      //switch statement listens for SET_USERS
      // {...state, users: action.payload.users}
      // break;
  //


      // def index
      //    render json: users: User.all
      // end

  // open index.js
    // ReactDom.render(
    //   <App stores="store"/>
    // )
