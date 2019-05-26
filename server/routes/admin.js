const express = require('express')
const admin = express.Router()

admin.get('/', (req, res) => res.send('admin'))
admin.get('/newblog', (req, res) => res.send('newblog'))
admin.get('/newpage', (req, res) => res.send('newpage'))
admin.get('/myblogs', (req, res) => res.send('myblogs'))

module.exports = admin
