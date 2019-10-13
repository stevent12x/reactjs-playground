import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
	ReactDOM.render(
		React.createElement(
			'div',
			null,
			'Hello React ',
			React.createElement('input', null),
			React.createElement('pre', null, new Date().toLocaleTimeString())
		),
		document.getElementById('root')
	);
}
setInterval(render, 1000);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
