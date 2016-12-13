import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Signup from './components/Signup'
import Profile from './components/Profile'
import Login from './components/Login'
import Logout from './components/Logout'
import Board from './components/Board'
import Welcome from './components/Welcome'
import FastLogin from './components/FastLogin'




export default (
 <Route path="/" component={App} >
  <IndexRoute component={Welcome}/>
  <Route path="signup" component={Signup} />
  <Route path="profile" component={Profile} />
  <Route path="login" component={Login}/>
  <Route path="board" component={Board} />
  <Route path="logout" component={Logout} />
 </ Route>
);
