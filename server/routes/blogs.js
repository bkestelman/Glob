const express = require('express')
const blogs = express.Router()

blogs.get('/', (req, res) => {
	res.send(req.blog)
})
blogs.get('/pages', (req, res) => {
	res.send({ blog: req.blog, pages: [ 'pages' ] })
})
blogs.get('/latest', (req, res) => {
	res.send({ blog: req.blog, latest: [ 'latest' ] })
})
blogs.get('/blurb', (req, res) => {
	res.send({ blog: req.blog, blurb: [ 'blurb' ] })
})

module.exports = blogs
