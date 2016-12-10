import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes';
import { Router, browserHistory } from 'react-router'
import { store } from './store'
// import $ from 'jquery'
// import './index.css';s
import '../public/bootstrap/css/bootstrap.css'
import '../public/style/master.css'
import '../public/style/typography.css'
// import '../public/bootstrap/js/bootstrap.js'
// import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
