import React, { useState } from 'react'
import UseEffect from './ue'
import { useEffect } from 'react'
import Timer from './Timer';

const UseEffectApp = () => {

	const [count, setCount] = useState(0);
	const [temp, setTemp] = useState(0);
	//first -> side-effect function
	//second -> clean-up function
	//third -> comma separated dep list

	// variation 1: runs on every render
	// useEffect(() => {
	// 	alert("Every render")
	// })

	// variation 2: runs only on first render
	// useEffect(() => {
	//   alert("Only on first render")
	// }, [])

	// variation 3: dependency
	// useEffect(() => {
	//   alert("When count updated")
	// }, [count])

	// variation 4: mutiple dependencies
	// useEffect(() => {
	//   console.log("Something changed")
	// }, [count, temp])

	// variation 5: cleanup function
	// useEffect(() => {
	// 	console.log("Count is updated")
	// 	return () => {
	// 		console.log("Count is unmounted")
	// 	}
	// }, [count])


	// function handleClick() {
	// 	setCount(count + 1);
	// }

	// function handleTemp() {
	// 	setTemp(temp + 1);
	// }


return (
	<div>
		{/* <button onClick={handleClick}>
				Click me
			</button>
			<p>Count is: {count}</p>
			<button onClick={handleTemp}>Click me(temp)</button>
			<p>Temp is: {temp}</p> */}
		
		{/* <Timer></Timer> */}
	</div>
)
}

export default UseEffectApp
