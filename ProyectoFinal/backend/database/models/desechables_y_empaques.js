const mongoose = require('mongoose');

const desechable_y_empaqueSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }, 
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    nombre_restaurante: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: true
    }
});

const Desechables = mongoose.model('Desechables', desechable_y_empaqueSchema);

module.exports = Desechables;