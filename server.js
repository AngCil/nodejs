const express = require('express')
const app = express();
const server = require('http').Server(app)


const bodyParser = require('body-parser')
const socket = require('./socket')
const db = require('./db')
const router = require('./network/routes')

const url = 'mongodb+srv://user:user1234@cluster0.lftui.mongodb.net/messages?retryWrites=true&w=majority'
db(url)

app.use(bodyParser.json())

socket.connect(server)

router(app)
app.use('/app', express.static('public'));

server.listen(3000, function(){
    console.log('La aplicacion esta escuchando en el localhost:3000')
})