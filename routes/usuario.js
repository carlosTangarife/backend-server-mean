// Requires
var express = require('express');

// inicializar variables
var app = express();

app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Get de usaurios'
    })
});

module.exports = app;