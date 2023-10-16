const express = require ('express');
const conectarDB = require ('./config/db');
const cors = require ('cors');

// creamos servidor
const app = express();

//Conectamos a la BD
conectarDB();

//middleware/ 
app.use(cors());
app.use(express.json()); 

//middleware/RUTA RAIZ/ cuando el usuario ponga localhost /api/productos importamos esa ruta
app.use('/api/productos', require('./routes/producto.routes'));

app.listen(4000, () => {
    console.log('el servidor funciona perfectamente')
})

