const express = require('express')
const clienteController = require('./controllers/cliente.controller')
const servicioController = require('./controllers/servicio.controller')
const app = express()
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/clientes', clienteController.listar)
app.get('/clientes/:correo', clienteController.consultarId)
app.post('/clientes', clienteController.registrar)
app.put('/clientes/:correo', clienteController.actualizar)
app.delete('/clientes/:correo', clienteController.eliminar)
app.get('/registrar', clienteController.formulario)


app.get('/servicios', servicioController.listar);
app.get('/servicios/:nombre', servicioController.buscarID);
app.post('/servicios', servicioController.registrar)
app.put('/servicios/:nombre', servicioController.actualizar)
app.delete('/servicios/:nombre', servicioController.eliminar);

const PORT = process.env.PORT || 9999;

app.listen(PORT, ()=>{
    console.log('Aplicacion en linea')
})






