var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app)

const port = process.env.PORT || 3231

const socketManager = require('./socketManager')

io.on('connection', socketManager)

app.listen(port, () => console.log("Listning:" + port))