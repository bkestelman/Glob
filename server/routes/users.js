const express = require('express')
const users = express.Router()

users.get('/', (req, res) => {
	res.send('users')
})

module.exports = users
