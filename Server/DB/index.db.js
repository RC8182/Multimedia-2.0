// 1. Importamos el métodao Pool desde Postgres y creamos un pool con los datos de la DB

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '28645455',
    database: 'multimedia',
    port: '5432'
});

// 2. Creamos las funciones asincronas que nos ayudarán a manejar la DB d

const createVideo= async (req, res)=> {
    // Pedimos al body sus datos y los almacenamos en constantes.
    const { label, description, href, gender } = req.body; 
    //Modificamos la DB
    const action= await pool.query('INSERT INTO videoObject (label, description, href, gender) VALUES ($1, $2, $3, $4)', [label, description, href, gender]); 
    // Enviamos respuesta de confirmación con los datos modificados en la BD
    res.json({   
        message: 'videoobject added successfully',
        body: {
            videoobject:{ label, description, href, gender }
        }
    });
    };

const getVideo= async (req, res)=> {
    const action= await pool.query('SELECT * FROM videoobject ORDER BY id ASC');
    res.json(action.rows);
}; 

const getVideoByName= async (req, res)=> {
    const label = req.params.label;
    const action= await pool.query('SELECT * FROM videoobject WHERE label = $1',[label]);
    res.json(action.rows);
}

const updateVideo= async (req, res)=> {
    const id= parseInt(req.params.id);
    const { label, description, href, gender } = req.body;
    const action= await pool.query('UPDATE videoobject SET label= $1, description= $2, href= $3, gender= $4 WHERE id= $5', [label, description, href, gender, id]);
    res.json({message: 'Dibu updated successfully',
              body: {videoobject: {label, description, href, gender}}  
            });
}

// 3. Exportamos las funciones creadas para ser utilizadas en routes.

module.exports ={createVideo, getVideo, updateVideo, getVideoByName}