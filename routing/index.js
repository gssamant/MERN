const express = require('express')
const app = express()
const port = 3000


const item = require('./routes/item');
app.use('/api', item);
// /api/ -> home page

// app.get('/', (req, res) => {
// 	res.send("Got a GET request")
// })
// app.post('/items', (req, res) => {
// 	res.send("Got a POST request from app")
// })
	


app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})