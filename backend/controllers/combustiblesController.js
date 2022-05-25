const Combustibles = require('../models/Combustibles');

// Muestra todos los combustibles
exports.mostrarCombustibles = async (req, res, next) => {
    try {
        // obtener todos los combustibles
        const combustibles = await Combustibles.find({});
        res.json(combustibles);
    } catch (error) {
        console.log(error);
        next();
    }
};

// Muestra un combustible en especifico por su ID
exports.mostrarCombustible = async (req, res, next) => {
    const combustible = await Combustibles.findById(req.params.idCombustible);

    if(!combustible) {
        res.json({mensaje : 'Ese Combustible no existe'});
        return next();
    }

    // Mostrar el combustible
    res.json(combustible);
};


// agrega un nuevo combustible
exports.nuevoCombustible = async (req, res, next) => {
    const combustible = new Combustibles(req.body);
    try {
        // almacenar el registro
        await combustible.save();
        res.json({ mensaje : 'Se agrego un nuevo combustible' });
    } catch (error) {
        // si hay un error, console.log y next
        res.send(error);
        next();
    }
};

// Actualiza un combustible via id
exports.actualizarCombustible = async (req, res, next) => {
    try {
        console.log("Datos a modificar", req.body);

        const filter = { _id : req.params.idCombustible };
        const update =  req.body;
        //Opciones, devolver el nuevo objeto modificado
        const options = {new : true};

        const combustible = await Combustibles.findOneAndUpdate(filter, update, options);
        res.json(combustible);
    } catch (error) {
        res.send(error);
        next();
    }
};

// Elimina un combustible via ID
exports.eliminarCombustible = async (req, res, next) => {
    try {
        await Combustibles.findByIdAndDelete({ _id : req.params.idCombustible });
        res.json({mensaje : 'El Combustible se ha eliminado'});
    } catch (error) {
        console.log(error);
        next();
    }
};
