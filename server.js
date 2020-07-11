const express = require('express')
const bodyParser = require('body-parser')

const router = require('./network/routes')

var app = express();
app.use(bodyParser.json())


router(app)

app.use('/app', express.static('public'));

app.listen(3000)
console.log('La aplicacion esta escuchando en el localhost:3000')