import React from 'react';

// Incorporating inline style using JSX //
// !This kind of styling is NOT considered best practice! //
const ErrorDisplay = ({message}) => (
	<div style={{
		color: 'red',
		backgroundColor: 'yellow',
		textAlign: 'center'}}>
		{message}
	</div>
);

export default ErrorDisplay;

const ConditionalError = ({message}) => (
	<div style={{
		color: Math.random() < 0.5 ? 'green' : 'blue',
		backgroundColor: 'yellow',
		textAlign: 'center'
	}}>
		{message}
	</div>
)
export {ConditionalError};

