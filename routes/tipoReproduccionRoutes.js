const express = require('express');
const router = express.Router();
const tipoReproduccionController = require('../controllers/tipoReproduccionController');

// Rutas para el recurso tipoReproduccion
router.get('/tipoReproduccion', tipoReproduccionController.obtenerTiposReproduccion);
router.post('/tipoReproduccion', tipoReproduccionController.crearTipoReproduccion);
router.get('/tipoReproduccion/:id', tipoReproduccionController.obtenerTipoReproduccionPorId);
router.put('/tipoReproduccion/:id', tipoReproduccionController.actualizarTipoReproduccion);
router.delete('/tipoReproduccion/:id', tipoReproduccionController.eliminarTipoReproduccion);

module.exports = router;
