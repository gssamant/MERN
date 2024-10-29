import React from 'react'
import './crendering.css'

function print(func) {
	func();
	alert("You have logged out.")
}

function LogOutButton(props) {
	const handleClick = () => {
		print(props.toggle);
	}
  return (
	  <button onClick={handleClick}>
		  Log Out
	  </button>
  )
}

export default LogOutButton