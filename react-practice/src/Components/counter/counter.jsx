import React, { useState } from 'react'
import './counter.css'

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className='counter-container'>
			<p id='para'>Current count is {count}</p>
			<button id='button' onClick={() => {
				setCount(count+1)
			}}>Increase</button>
			<button id='button' onClick={() => {
				setCount(count-1)
			}}>Decrease</button>
		</div>
	)
}

export default Counter