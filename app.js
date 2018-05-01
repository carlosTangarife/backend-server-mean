// Requires
var express = require('express');

// inicializar variables
var app = express();

// peticion get, primer parametros, request, segundo parametro, la respuesta
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    })
})

// Escucahr peticiones
app.listen(3000, ()=> {
    console.log('Node/Express: \x1b[36m%s\x1b[42m', 'online');
    
})