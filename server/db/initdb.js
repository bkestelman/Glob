const createdb = function createdb(db, name) {
	db.create(name)
	  .then(() => console.log('created db ' + name))
	  .catch((err) => { 
		  console.log('error creating db ' + name)
	  	  console.log(err.reason)
	  })
}
const initdb = function initdb(nano) {
	const db = nano.db
	createdb(db, 'foo')
	createdb(db, 'users')
}
module.exports = function(config) {
	const nano = require('nano')(config.host + ':' + config.port)
	initdb(nano)
}
