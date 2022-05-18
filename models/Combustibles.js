const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const combustiblesSchema = new Schema({
    nombre:{
        type: String
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Combustibles', combustiblesSchema);