const express = require('express')
const base = express.Router()

base.get('/', (req, res) => res.send('hello world'))
base.get('/login', (req, res) => res.send('login'))
base.get('/signup', (req, res) => res.send('signup'))
base.get('/all', (req, res) => res.send('all'))
base.get('/latest', (req, res) => res.send('latest'))
base.get('/popular', (req, res) => res.send('popular'))

module.exports = base
