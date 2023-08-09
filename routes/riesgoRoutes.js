const express = require('express');
const router = express.Router();
const riesgoController = require('../controllers/riesgoController');

// Rutas para el recurso riesgo
router.get('/riesgo', riesgoController.obtenerRiesgos);
router.post('/riesgo', riesgoController.crearRiesgo);
router.get('/riesgo/:id', riesgoController.obtenerRiesgoPorId);
router.put('/riesgo/:id', riesgoController.actualizarRiesgo);
router.delete('/riesgo/:id', riesgoController.eliminarRiesgo);

module.exports = router;
