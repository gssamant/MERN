import React, { useState, useRef } from 'react'

const Stopwatch = () => {

	const [time, setTime] = useState(0);
	let timeRef = useRef(null);

	function handleStart() {
		timeRef.current = setInterval(() => {
			setTime(time => time+1)
		}, 1000);
	}
	function handleStop() {
		clearInterval(timeRef.current);
		timeRef.current = null;
	}
	function handleReset() {	
		handleStop();
		setTime(0);
	}

	return (
		<div className='app-container'>
			<h1>Time: {time}</h1>
			<button onClick={handleStart}>Start</button>
			<button onClick={handleStop}>Stop</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}

export default Stopwatch
