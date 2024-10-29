import React, { useState } from 'react'
import State from './state.jsx'
import Child from './state.jsx'
const Parent = () => {
	const [name, setName] = useState('')
	return (
		<div id='state-container'>
			<Child title="child1" name={name} setName={setName} />
			<Child title="child2" name={name} setName={setName} />
			<p>Inside parent: {name}</p>
		</div>
	)
}

export default Parent
