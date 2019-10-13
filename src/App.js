import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
      React.createElement (
          'div',
          null,
          'Hello React ',
          React.createElement('input', null),
          React.createElement(
              'pre', null, new Date().toLocaleTimeString()
          )
      )
  )
}

export default App;
