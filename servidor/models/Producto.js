const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: String,
        requited: true
    },
    categoria: {
        type: String,
        requited: true
    },
    ubicacion: {
        type: String,
        requited: true
    },
    precio: {
        type: Number,
        requited: true
    },
    fechaCreacion: {
        type: Date, 
        default: Date.now() // se crea la fecha actual
    }
    
})

module.exports = mongoose.model('Productos', ProductoSchema)