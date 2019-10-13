import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import render from './App'
import Button from './components/Button.js'
import * as serviceWorker from './serviceWorker';
import RandomValue from "./components/RandomValue";


setInterval(render, 1000);
ReactDOM.render(<Button label="Save" />, document.getElementById('mountNode'));
ReactDOM.render(<RandomValue/>, document.getElementById('random'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
