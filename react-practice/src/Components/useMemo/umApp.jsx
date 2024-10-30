import React, { useState, useMemo } from 'react'
import './um.css'

const UseMemoApp = () => {

	const [count, setCount] = useState(0); 
	const [input, setInput] = useState(0);

	function expensive(num) {
		for (let i = 0; i < 10000000000; i++) { }
		return Number(num)+1;
	}

	let val = useMemo(() => expensive(input), [input])

	return (
		<div>
			<button onClick={() => setCount(count+1)}>
				Click Me
			</button>
			<p>Count: {count}</p>
			<input
				type='number'
				value={input}
				placeholder='Enter input'
				onChange={(e) => setInput(e.target.value)}
			/>
			<p>Value: {val}</p>
		</div>
	)
}

export default UseMemoApp
