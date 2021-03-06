const express = require('express')
const app = express()
const port = 5000 

const cors = require('cors')
const corsOptions = require('./corsOptions')
app.use(cors(corsOptions))

// Initialize db 
const dbconf = require('./db/config.json')
require('./db/initdb')(dbconf)

// Routes
const base = require('./routes/base')
const blogs = require('./routes/blogs') 
const admin = require('./routes/admin')
const users = require('./routes/users')

app.use('/', base)
app.use('/blogs?/:user/:title', (req, res, next) => {
	req.blog = req.params
	next()
}, blogs)
app.use('/admin', admin)
app.use('/users', users)

app.listen(port, () => console.log(`listening on port ${port}`))
