// Requires
var express = require('express');

// inicializar variables
var app = express();

var Usaurio = require('../models/usuario')

app.get('/', (req, res) => {

    Usaurio.find({}, (err, usuarios)=> {
        if(err) {
            return err.status(500).json({
                ok: false,
                mensaje: 'Error cargando usuario',
                error: err
            })
        } 

        res.status(200).json({
            ok: true,
            usuarios: usuarios
        })
    });
});

module.exports = app;