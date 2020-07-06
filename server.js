const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();
const response = require('./network/response')

var app = express();
app.use(bodyParser.json())
app.use(router);

router.get('/message',(req, res)=>{
    console.log(req.headers)
    res.header({
        "custom-header": "Nuestro valor personalizado"
    })
    response.success(req, res, 'Lista de mensajes')
})
router.post('/message',(req, res)=>{
    console.log(req.query)
    if(req.query.error == "ok"){
        response.error(req,res,'Error inesperado', 500, 'Es solo una simulacion de los errores')
    }else{
        response.success(req, res, 'Creado correctamente', 201)
    }
}) 
// app.use('/', (req, res)=>{
//     res.send('Hola')
// })
app.use('/app', express.static('public'));

app.listen(3000)
console.log('La aplicacion esta escuchando en el localhost:3000')