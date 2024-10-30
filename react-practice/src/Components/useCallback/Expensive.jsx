import React, { useCallback, useRef, useEffect, useState } from 'react'

function ExpensiveComp() {

	const [count, setCount] = useState(0);
	const [text, setText] = useState("");
	const prev = useRef(null);

	const Expensive = useCallback(() => {
		console.log("Running expensive")
		let temp = 0;
		for (let i = 0; i < 10000000; i++) {
			temp += i;
		}
		return temp;
	}, [count]);

	useEffect(() => {
		if (prev.current) {
			if (prev.current === Expensive) {
				console.log("Not re-created")
			}
			else {
				console.log("Function recreated")
			}
		}
		else {
			prev.current = Expensive;
		}
	}, [Expensive])
	

	return (
		<div>
			<p>Count: {count}</p>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='Enter text'
			/>
			<p>Result: {Expensive()}</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	)
}
export default ExpensiveComp
