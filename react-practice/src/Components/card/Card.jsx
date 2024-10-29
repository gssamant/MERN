import React from 'react'
import './card.css'
import lfc from '/src/assets/lfc.jpg'
const Card = (props) => {
  return (
	<div className='user-container' style={props.style}>
		  <h1 id='user-name'>{props.name}</h1>
		  <img id='user-img' src={props.image} alt={`Image of ${props.name}`}></img>
		  <p id='user-desc'>My name is {props.name}</p>

	</div>
  )
}

export default Card;
