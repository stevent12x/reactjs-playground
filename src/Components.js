import React, {useState} from 'react'



// All these components are in JSX Format //
// Generates a Random Number //
const RandomValue = () => (
	<div>
		{Math.floor(Math.random()*100)}
	</div>
);
export {RandomValue};

const Button = ({clickAction, clickValue}) => {
	return (
		<button onClick={() => clickAction(clickValue)}>
			+{clickValue}
		</button>
	);
};
const Display = ({content}) => (
	<pre>
		Start adding!
		<br/>
		{content}
	</pre>
);
// This function takes the following two and wraps them in a single function that can be called and updated  //
// while simultaneously referencing the other two... //
// Very cool //
const CountManager = () => {
	const [count, setCount] = useState(0);
	const incrementCounter = (incrementValue) => {
		setCount(count + incrementValue);
	}
	return (
		<>
			<Button clickAction={incrementCounter} clickValue={1}/>
			<Button clickAction={incrementCounter} clickValue={5}/>
			<Button clickAction={incrementCounter} clickValue={10}/>
			<Display content={count}/>
		</>
	);
};
export {CountManager};



