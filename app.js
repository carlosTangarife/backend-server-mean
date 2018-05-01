// Requires
var express = require('express');
var mongoose = require('mongoose');

// inicializar variables
var app = express();

// conexion a la base de datos
mongoose.connect('mongodb://localhost/hospitalDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log('MogoDB: \x1b[36m%s\x1b[0m', 'online'));

// peticion get, primer parametros, request, segundo parametro, la respuesta
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    })
})

// Escucahr peticiones
app.listen(3000, ()=> {
    console.log('Node/Express: \x1b[36m%s\x1b[0m', 'online');  
})