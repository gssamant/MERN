import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Props from "./props";
import './props.css'
import ButtonApp from "./buttonApp";


	ReactDOM.createRoot(document.getElementById('root')).render(
		<div>
			{/* <Props>
				<h1>Hello</h1>
				<h2>Hello</h2>
			</Props> */}
			<ButtonApp/>
		</div>
	)
