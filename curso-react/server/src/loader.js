const server = require('./config/server')
const db =  require('./config/db')

require('./config/routes')(server)