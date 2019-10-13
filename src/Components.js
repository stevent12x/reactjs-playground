import React from 'react'


// All these components are in JSX Format //


// Button Component //
function Components(props) {
	return <button type="submit">{props.label}</button>;
}
export {Components};


// Generates a Random Number //
const RandomValue = () => (
	<div>
		{Math.floor(Math.random()*100)}
	</div>
);
export {RandomValue};


