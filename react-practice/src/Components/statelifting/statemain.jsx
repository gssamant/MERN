import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import '/src/Components/props/props.css'
import StateLifting from "./state";
import Parent from "./stateApp.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
	<div>
		<Parent/>
	</div>
)
