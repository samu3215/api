const express = require('express')
const router = express.Router()
const servicioController = require('../controllers/servicio.controller')

router.get('/servicios', servicioController.listar);
router.get('/servicios/:nombre', servicioController.buscarID);
router.post('/servicios', servicioController.registrar)
router.put('/servicios/:nombre', servicioController.actualizar)
router.delete('/servicios/:nombre', servicioController.eliminar);

module.exports = router;    