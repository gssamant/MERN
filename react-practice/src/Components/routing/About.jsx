import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const About = () => {
	const navigate = useNavigate();
	function handleClick() {
		navigate('/')
	}
  return (
	<div>
		  <h1>
			  About
		  </h1>
		  <button onClick={handleClick}>
			  Go to home
		  </button>
		  <Outlet></Outlet>
	</div>
  )
}

export default About
