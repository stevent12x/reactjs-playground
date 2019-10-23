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

// This function takes the following two and wraps them in a single function that can be called and updated  //
// while simultaneously referencing the other two... //
// Very cool //
const CountManager = () => {
	const [count, setCount] = useState(0);
	const incrementCounter = (incrementValue) => {
		setCount(count + incrementValue);
	}
	const Display = ({content}) => (
		<pre>
		Start adding!
		<br/>
			{content}
	</pre>
	);
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

const Like = () => {
	const [count, setCount] = useState(0);
	const incrementLikes = (incrementLikes) => {
		setCount(count + incrementLikes);
	}
	const Display = ({content}) => (
		<pre>
			{content}
		</pre>
	);
	return (
		Like.length < 10 ?
			<>
				<Button clickAction={incrementLikes} clickValue={1}/>
				<Display content={count}/>
			</>
			:
			console.log("nope")
	);
}
export {Like};


