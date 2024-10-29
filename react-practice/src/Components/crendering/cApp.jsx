import React, { useState } from 'react'
import './crendering.css'
import LogInButton from './crenderingIn'
import LogOutButton from './crenderingOut'

const CApp = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);

	function toggle() {
		setLoggedIn(!isLoggedIn);
	}
	// if (isLoggedIn) {
	// 	return (
	// 			<LogOutButton/>
	// 	)
	// }  
	// else {
	// 	return (
	// 		<LogInButton/>
	// 	)
	// }

	return (
		<div>
			{isLoggedIn ? (
				<LogOutButton toggle={toggle} />
			) : (
				<LogInButton toggle={toggle} />
			)}
		</div>
	)
}

export default CApp
