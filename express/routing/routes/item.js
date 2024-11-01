const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('Got a GET request')
	res.sendFile('../dummy.html', {root: __dirname})
})

router.post('/items', (req, res) => {
	res.json({ a: 1, b: 2 })
	res.send("Got a POST request")
})

router.put('/items/:id', (req, res) => {
	res.send("Got a PUT request")
})

router.delete('/items/:id', (req, res) => {
	res.send("Got a DELETE request")
})

module.exports = router