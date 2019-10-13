import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {render} from './App'
import {Components, RandomValue} from './Components.js'
import ErrorDisplay from "./components/ErrorDisplay";
import * as serviceWorker from './serviceWorker';


setInterval(render, 1000);
ReactDOM.render(<Components label="Save" />, document.getElementById('mountNode'));
ReactDOM.render(<RandomValue/>, document.getElementById('random'));
ReactDOM.render(<ErrorDisplay message="Not today, son" />, document.getElementById('error'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
