import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import UseRefApp from "./userefApp";
import Stopwatch from "./stopwatch";

ReactDOM.createRoot(document.getElementById('root')).render(
	<StrictMode>
		{/* <UseRefApp/> */}
		<Stopwatch></Stopwatch>
	</StrictMode>
)
