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

// This button will auto-increment with each press //
const Button = () => {
	const [count, setCount] = React.useState(0);

	return (
		<button onClick={() => setCount(count + 1)}>
			{count}
		</button>
	);
};
export {Button};


