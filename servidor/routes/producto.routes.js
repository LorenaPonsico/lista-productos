//Rutas para producto
const express = require('express'); // para acceder al ruteo
const router = express.Router();
const productoController = require('../controllers/productoController')

//Cuando ejecutamos este post ejecutamos esa funcion
router.post('/', productoController.crearProducto) // CREAR/CREATE
router.get('/', productoController.obtenerProductos) // LEER/READ
router.put('/:id', productoController.actualizarProducto) //ACTUALIZAR/UPDATE
router.get('/:id', productoController.obtenerProducto) //Obtener solo 1 producto
router.delete('/:id', productoController.eliminarProducto) //ELIMINAR PRODUCTO

 //obtener
module.exports = router;