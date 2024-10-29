import React, { useContext } from 'react'
// import { UserContext } from './ucApp'
import { ThemeContext } from './ucApp'

const ChildC = () => {
	// const user = useContext(UserContext)
	const { theme, setTheme } = useContext(ThemeContext)

	function toggleTheme() {
		if (theme === 'light') {
			setTheme('dark')
		}
		else {
			setTheme('light')
		}
	}
	return (
		<div>
			<button onClick={toggleTheme}>
				Change Theme
			</button>
		</div>
	)
}

export default ChildC