const express = require('express'); // Importa o expresss

const app = express(); // Instancia a aplicação

app.get("/", (request, response) =>{
    // return response.send('Hello World');
    return response.json({
        evento:'Semana OmniStack 11.0',
        aluno: 'Thomas Cristanis' 

    });
} );

app.listen(3333); //Escuta a porta 3333