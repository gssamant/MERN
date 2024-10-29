import React from 'react'
import './routing.css'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
	<div>
		  <ul id="ul-container">
			  <li>
				  <NavLink to='/' className={({isActive}) => isActive? "active" : ""}>Home</NavLink>
			  </li>
			  <li>
				  <Link to='/about'>About</Link>
			  </li>
	  </ul>
	</div>
  )
}

export default Navbar
