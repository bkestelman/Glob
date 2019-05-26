const dao = {}
var nano

dao.getAllUsers = function getAllUsers() {
	const users = nano.use('users')
	return users.list()
}
dao.addUser = function addUser(username) {
	const users = nano.use('users')
	return users.insert({ username: username }, username)
}
module.exports = exports = function(dbconf) {
	console.log('creating dao')
	nano = require('nano')(dbconf.host + ':' + dbconf.port)
	console.log(dao)
	return dao
}
