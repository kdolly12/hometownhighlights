// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navibar from './Navibar'; // Make sure this path is correct

ReactDOM.render(
  <Router>
    <Navibar/>
  </Router>,
  document.getElementById('root')
);
