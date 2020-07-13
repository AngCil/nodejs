const express = require('express')
const bodyParser = require('body-parser')

const db = require('./db')
const url = 'mongodb+srv://user:user1234@cluster0.lftui.mongodb.net/messages?retryWrites=true&w=majority'
db(url)

const router = require('./network/routes')

var app = express();
app.use(bodyParser.json())


router(app)

app.use('/app', express.static('public'));

app.listen(3000)
console.log('La aplicacion esta escuchando en el localhost:3000')