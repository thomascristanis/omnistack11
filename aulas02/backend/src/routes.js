const express = require('express'); // Importa o expresss

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentsController');

const ProfileController = require('./controllers/ProfileController');

const Sessioncontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.get('/profile', ProfileController.index);


routes.delete('/incidents/:id', IncidentController.delete);
// Deixar a routes disponivel 
// Exporta uma variavel de detro de uma arquivo.
module.exports = routes;