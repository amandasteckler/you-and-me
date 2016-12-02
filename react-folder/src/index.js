import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { store } from './store'
import { Provider } from 'react-redux'
import routes from './routes';
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>

  </Provider>,
  document.getElementById('root')
);
