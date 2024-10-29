import React from 'react'
import './props.css'
const Button = (props) => {
	return (
		<div >
			{props.count}
			<button id='button' onClick={props.increaseClick || props.decreaseClick}>
				{props.text}
			</button>
		</div>
	)
}

export default Button