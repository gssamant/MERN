import React, { useCallback, useState } from 'react'
import './ucb.css'
import Child from './child.jsx';
import ExpensiveComp from './Expensive.jsx';

const UCBApp = () => {
	// const [count, setCount] = useState(0);

	// const handleClick = useCallback(() => {
	// 	setCount(count + 1)
	// }, [count]);

	return (
		// <div className='app-container'>
		// 	<p>Count: {count}</p>
		// 	<button onClick={handleClick}>+</button>
		// 	<Child buttonName="Click Me" handleClick={handleClick}></Child>
		// </div>
		<div>
			<ExpensiveComp></ExpensiveComp>
		</div>
	)
}

export default UCBApp
