import React from 'react'
import EventHandling from './eh'
import './eh.css'

const EHapp = () => {

	function handleClick() {
		alert("Hii");
	}

	function handleChange(e) {
		console.log("Input:", e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert("Submit?")
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={handleChange}></input>
				<button type="button"
					onClick={e => {
						e.stopPropagation();
						handleClick()
					}}>Click me</button>
			</form>
		</div>
	)
}

export default EHapp
