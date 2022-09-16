// 1. Creamos el servidor con express
const express= require('express');
const server= express();

// 2. Le decimos al servidor que se comunique en JSON
server.use(express.json());
server.use(express.urlencoded({extended: false}));

// Instalamos y llamamos a cors para que el browser no nos bloquee la API al estar en el mismo origen
const cors= require('cors');
server.use(cors());

// 3. Importamos las rutas 
server.use(require('./Routes/index.routes'));

// 4. Le pasamos al servidor el puerto de escucha.
const port= 4000;
server.listen(port, ()=>(
    console.log(`Server on port ${port}`)
))

