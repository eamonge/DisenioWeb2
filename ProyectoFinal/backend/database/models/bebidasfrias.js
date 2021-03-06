const mongoose = require('mongoose');

const bebidaFriasSchema = new mongoose.Schema({
        codigo: {
            type: String,
            required: true
        },
        nombre:  {
            type: String,
            required: true
        },
        ingredientes: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        restaurante: {
            type: String,
            required: true
    
        },
        descripcion: {
            type: String,
            required: true
        }
});

const BebidasFrias = mongoose.model('BebidasFrias', bebidaFriasSchema);

module.exports = BebidasFrias;