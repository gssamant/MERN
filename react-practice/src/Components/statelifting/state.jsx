import React from 'react'
import './state.css'
const Child = (props) => {
  return (
	<div >
		  <input type='text' onChange={(e) => props.setName(e.target.value)}/>
		  <p>Inside {props.title}: {props.name}</p>
	</div>
  )
}

export default Child
 