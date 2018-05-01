// Requires
var express = require("express");

// inicializar variables
var app = express();

var Usaurio = require("../models/usuario");

// obtener todos los usuarios
app.get("/", (req, res) => {
  Usaurio.find({}, "nombre email img role").exec((err, usuarios) => {
    if (err) {
      return err.status(500).json({
        ok: false,
        mensaje: "Error cargando usuario",
        error: err
      });
    }

    res.status(200).json({
      ok: true,
      usuarios: usuarios
    });
  });
});

// Crear usuario
app.post("/", (req, res) => {
    var body = req.body;

    var usuario = new Usaurio({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        img: body.img,
        role: body.role
    });

    usuario.save((err, usuarioGuardado) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al crear el usaurio',
                errors: err
            });
        }
        res.status(201).json({
            ok: true,
            usuario: usuarioGuardado
          });
    });
  });

module.exports = app;
