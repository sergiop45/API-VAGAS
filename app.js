const express = require('express');
const  app = express();
const port = 4000;
const route = require('./routes/Vagas');
const conn = require('./src/database/connection');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

conn();

//ROTAS

app.use('/api/', route);

app.get('/', (req, res) => {

    res.status(200).json({message: 'bem bindo a api'});

});

app.listen(port, () => {
    
    console.log('Servidor rodando na porta: ' + port);
    
});