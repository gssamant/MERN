const express = require('express')
const app = express();
const port = 3000;

app.use(express.json())

// // middlewares
// const loginMiddleware = function (req, res, next) {
// 	console.log("Logging in");
// 	next();
// }
// app.use(loginMiddleware);


// //creating middleware
// const authMiddleware = function (req, res, next) {
// 	console.log("authenticating");
// 	res.send("Done");
// 	// next();
// }
// //loading middleware
// app.use(authMiddleware);

// const validMiddleware = function (req, res, next) {
// 	console.log("validating");
// 	next();
// }
// app.use(validMiddleware);

const route = require('./routes/route')
app.use('/api', route)

// app.get('/', (req, res) => {
// 	console.log(req.body)
// 	res.send('Hello world!')
// })

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})