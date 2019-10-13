import React from 'react';

// Incorporating inline style using JSX //
const ErrorDisplay = ({message}) => (
	<div style={{
		color: 'red',
		backgroundColor: 'yellow',
		textAlign: 'center'}}>
		{message}
	</div>
);

export default ErrorDisplay;