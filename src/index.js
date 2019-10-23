import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {render} from './App'
import {RandomValue, CountManager, Like} from './Components.js'
import ErrorDisplay, {ConditionalError} from "./components/ErrorDisplay";
import * as serviceWorker from './serviceWorker';

setInterval(render, 1000);
ReactDOM.render(<CountManager/>, document.getElementById('mountNode'))
ReactDOM.render(<RandomValue/>, document.getElementById('random'));
ReactDOM.render(<ErrorDisplay message="Not today, son" />, document.getElementById('error'));
ReactDOM.render(<ConditionalError message="This should be different from time to time" />, document.getElementById('conditional') )
ReactDOM.render(<Like/>, document.getElementById('likes'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
