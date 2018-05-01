// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// inicializar variables
var app = express();

//Body parser application/x-form/urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//parse application/json
app.use(bodyParser.json());

// se importa la ruta base
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');

// conexion a la base de datos
mongoose.connect('mongodb://localhost/hospitalDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> console.log('MogoDB: \x1b[36m%s\x1b[0m', 'online'));

// peticion get, primer parametros, request, segundo parametro, la respuesta
app.use('/usuario',  usuarioRoutes);
app.use('/',  appRoutes);

// Escucahr peticiones
app.listen(3000, ()=> {
    console.log('Node/Express: \x1b[36m%s\x1b[0m', 'online');  
})