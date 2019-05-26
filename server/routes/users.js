const express = require('express')
const users = express.Router()
const dbconf = require('../db/config.json')
console.log('getting dao')
const dao = require('../db/dao')(dbconf)
console.log(dao)

users.get('/', (req, res) => {
	dao.getAllUsers().then((body) => {
		res.send( body )
	}).catch((err) => res.send(err.reason))
})
users.get('/new/:username', (req, res) => {
	dao.addUser(req.params.username).then((body) => {
		res.send('created user' + req.params.username)
	}).catch((err) => res.send(err.reason))
})

module.exports = users
