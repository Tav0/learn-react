// main application entry point
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'react-bootstrap/dist/react-bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

import routes from './routes';
import store from './store';

const mountPoint = document.getElementById('root');
const rootnode = (
  <Provider store={store}>
    {routes}
  </Provider>
);

ReactDOM.render(rootnode, mountPoint);

