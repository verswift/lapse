// allows the use of the whole react library to build the application
// import component from file - roughly speaking
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // app component
  // self closing tag - see html
  <App />, document.getElementById('root')
)
