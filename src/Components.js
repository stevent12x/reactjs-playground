import React, {useState} from 'react'



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

const Button = ({clickAction}) => {
	return (
		<button onClick={clickAction}>
			+1
		</button>
	);
};
const Display = ({content}) => (
	<pre>
	You've clicked the button{' ' + content + ' '}times!
	</pre>
);
// This function takes the following two and wraps them in a single function that can be called and updated  //
// while simultaneously referencing the other two... //
// Very cool //
const CountManager = () => {
	const [count, setCount] = useState(0);
	const incrementCounter = () => {
		setCount(count+1);
	}
	return (
		<>
		<Button clickAction={incrementCounter}/>
		<Display content={count}/>
		</>
	);
};
export {CountManager};



