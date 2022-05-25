const express = require('express');
const router = express.Router();

const combustiblesController = require('../controllers/combustiblesController');

module.exports = function() {
     
    // Muestra todos los combustibles
    router.get('/combustibles',combustiblesController.mostrarCombustibles);

    // Muestra un Combustible en especifico por su ID
    router.get('/combustibles/:idCombustible',  combustiblesController.mostrarCombustible);

    // Nuevo Combustible
    router.post('/combustibles', combustiblesController.nuevoCombustible);    

    // Actualizar Combustibles
    router.put('/combustibles/:idCombustible', combustiblesController.actualizarCombustible);

    // Eliminar Combustibles
    router.delete('/combustibles/:idCombustible', combustiblesController.eliminarCombustible);

    return router;
};
