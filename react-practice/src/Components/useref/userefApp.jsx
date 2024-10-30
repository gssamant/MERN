import React, { useRef } from 'react'
import './useRef.css'

const UseRefApp = () => {

	let btnref = useRef();

	function changeColor() {
		btnref.current.style.backgroundColor = "red"
	}

  return (
	<div className='app-container'>
		  <button ref={btnref}>
			  I am button 1
		  </button>
		  <button onClick={changeColor}>
			  Change color of button 1
		  </button>
	</div>
  )
}

export default UseRefApp


/*
	usecase 1:
 		to make variables persist value in re-rendering
		no re-rendering when a variable created using useref is changed

	usecase 2:
		directly access any element from DOM

*/