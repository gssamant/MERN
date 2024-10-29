import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import ParamComp from './ParamComp'
import Me from './Me'
import NotFound from './NotFound'

const router = createBrowserRouter(
	[
		{
			path: "/",
			element:
				<div>
					<Navbar></Navbar>
					<Home></Home>
				</div>
		},
		{
			path: "/about",
			element:
				<div>
					<Navbar></Navbar>
					<About></About>
				</div>,
			children: [
				{
					path: "me",
					element: <Me></Me>
				}
			]
		},
		{
			path: "/student/:id",
			element: 
				<div>
					<Navbar></Navbar>
					<ParamComp></ParamComp>
			</div>
		},
		{
			path: '*',
			element: <NotFound></NotFound>
		}
	]
)

function RoutingApp() {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
		</div>
	)
}

export default RoutingApp