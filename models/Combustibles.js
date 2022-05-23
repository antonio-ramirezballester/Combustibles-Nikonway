const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const combustiblesSchema = new Schema({
    nombre:{
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
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Combustibles', combustiblesSchema);