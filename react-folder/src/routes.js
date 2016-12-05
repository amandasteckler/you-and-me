import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Signup from './components/Signup'
import Profile from './components/Profile'
import Login from './components/Login'

export default (
 <Route path="/" component={App} >
   <Route path="signup" component={Signup} />
   <Route path="profile" component={Profile} />
   <Route path="login" component={Login}/>
 </ Route>
);
