const http = require("http");
const fs = require("fs");
const url = require("url");

// using express
const express = require("express");
const app = express();
app.get("/", (req, res) => {
	res.send(`Hello ${req.query.name}`);
})
app.get("/about", (req, res) => {
	res.send("About page")
})
app.listen(3000, () => {})


// function myHandler(req, res) { 
// 	if (req.url === "/favicon.ico") return res.end();
// 	const log = `${Date.now()}: ${req.url} New log\n`;
// 	const myURL = url.parse(req.url);
// 	console.log(myURL);
// 	fs.appendFile("log.txt", log, (err, data) => {
// 		switch (req.url) {
// 			case "/":
// 				res.end("Homepage");
// 				break;
// 				case "/about":
// 					res.end("I am wolverine");
// 					break;
// 					default:
// 						res.end("404 not found")
// 		}
// 	})
// 	console.log("Request received");
// };

//createServer responds on receiving request
// const myServer = http.createServer(myHandler);

// myServer.listen(3000, () => {
// 	console.log("Server started");
// })
