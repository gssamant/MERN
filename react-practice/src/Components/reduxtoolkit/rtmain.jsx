import React from "react";
import ReactDOM from 'react-dom/client'
import RTapp from "./rtApp";
import { store } from "./store.js";
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RTapp/>
	</Provider>
)

/*
	create store
	wrap app component under Provider
	create Slice
	register reducer in store

*/