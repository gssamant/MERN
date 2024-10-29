import React, { useState } from 'react'
import Button from './button';
import './props.css'

function ButtonApp() {
	const [count, setCount] = useState(0);
	function increaseClick() {
		setCount(count + 1);
	}
	function decreaseClick() {
		setCount(count - 1);
	}
	return (
		<div className='props-container'>
			<h1>{count}</h1>
			<Button increaseClick={increaseClick} text="Increase">
			</Button>
			<Button
				decreaseClick={decreaseClick} text="Decrease">
			</Button>
		</div>
	)
}

export default ButtonApp
