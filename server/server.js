require('./config/config.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


let puerto = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/usuario', function(req, res) {
    res.json('Get-Usuario: JOSE ISRAEL');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'nombre es indispensable'
        });
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('Delete-Usuario: JOSE ISRAEL');
})



app.listen(puerto, () => {
    console.log(`Escuchando el puerto: ${puerto}`);
})