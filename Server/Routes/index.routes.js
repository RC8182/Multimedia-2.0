// 1. Importamos el módula Router de Express
const {Router}= require('express');
const router= Router();

// 2. Importamos las funciones creadas para gestionar la Base de Datos
const {createVideo, getVideo, updateVideo, getVideoByName}= require('../DB/index.db')

// 3. Creamos las rutas para los métodos get / post / put /etc...
//      Syntaxis : router.get(Path , Funcion);

router.get('/', (req, res)=>{
    console.log('Esta es la página de inicio') // Mensaje por consola
    res.send('Esta es la página de inicio')  // Mensaje al navegador
    });


router.get('/api/blaze', (req, res)=>{
    console.log('Binvenidos a la página del Blaze and the Monsters Machines!')
    res.send('Bienvenidos a la página de Blaze and the Monsters Machine!')
});

// Llamamos a las funciones creadas para manejar la DB / API
router.post('/api', createVideo); 
router.get('/api', getVideo);
router.get('/api/:label', getVideoByName);
router.put('/api/:id', updateVideo);

// 4. Exportamos las rutas para que index.js las pueda utilizar
module.exports= router;