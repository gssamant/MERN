import React from 'react'

const Child = React.memo(
	(props) => {
		console.log("Child rendered")
		return (
			<div>
				<button onClick={props.handleClick}>{props.buttonName}</button>
			</div>
		)
	}
);

export default Child
