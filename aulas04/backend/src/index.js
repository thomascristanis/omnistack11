const express = require('express'); // Importa o expresss
const cors = require('cors');
const routes = require('./routes');

const app = express(); // Instancia a aplicação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); //Escuta a porta 3333