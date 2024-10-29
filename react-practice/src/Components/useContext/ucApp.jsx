import React, { createContext, useState } from 'react';
import ChildA from './ChildA';
import ChildC from './ChildC';

import './uc.css'

/*
	step 1: create Context
	step 2: wrap all the child inside a provider
	step 3: pass value
	step 4: consume inside consumer

*/

// const UserContext = createContext();
const ThemeContext = createContext();

function UseContextApp() {
	// const [user, setUser] = useState({ name: "Gaurav" })
	// return (
	// 	<>
	// 		<UserContext.Provider value={user}>
	// 			<ChildA></ChildA>
	// 			{/* <ChildC></ChildC> */}
	// 		</UserContext.Provider>
	// 	</>
	// )

	const [theme, setTheme] = useState('theme');

	return (
		< ThemeContext.Provider value={{ theme, setTheme }} >
			<div id="container" style={{backgroundColor:theme==='light'?"beige":"orange"}}>
				<ChildA></ChildA>
			</div>
		</ThemeContext.Provider >
	)
}

export default UseContextApp
// export {UserContext}
export { ThemeContext }