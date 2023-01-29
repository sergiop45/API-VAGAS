const express = require('express');
const  app = express();
const port = 4000;
const VagaController = require('./routes/Vagas');
const UserController = require('./routes/Usuarios');
const LoginController = require('./routes/Login');
const conn = require('./src/database/connection');
const jwt = require('jsonwebtoken');
require('dotenv-safe').config();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

conn();

//ROTAS

app.use('/api/', VagaController);
app.use('/api/', UserController);
app.use('/api/', LoginController);

app.get('/', (req, res) => {

    res.status(200).json({message: 'bem bindo a api'});

});

app.listen(port, () => {
    
    console.log('Servidor rodando na porta: ' + port);
    
});