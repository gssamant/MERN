import React from 'react'
import './crendering.css'

function print(func) {
	func();
	alert("You have logged in.");
}

function LogInButton(props) {
	const handleClick = () => print(props.toggle);
	return (
		<button onClick={handleClick}>
			Log In
		</button>
	)
}

export default LogInButton