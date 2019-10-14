import React from 'react';
import './App.css';
import ReactDOM from "react-dom";

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

export {render};
