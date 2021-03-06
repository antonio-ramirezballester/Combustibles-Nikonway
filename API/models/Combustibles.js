const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const combustiblesSchema = new Schema({
    id:{
        type: Number
    },
    nombre:{
        type: String
    },
    descripcion:{
        type: String
    },
    categoria:{
        type: String
    },
    precio:{
        type: Number
    },
    preciou:{
        type: String
    },
    stock:{
        type: Number
    },
    img:{
        type: String
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Combustibles', combustiblesSchema);