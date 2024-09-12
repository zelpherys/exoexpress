const express = require('express');
const app = express();
const port = 3000;

const bienvenueController = require('./controllers/bienvenueController');
const infoController = require('./controllers/infoController');
const accesInterditController = require('./controllers/accesInterditController');
const redirectionAccueilController = require('./controllers/redirectionController');
const homeController = require('./controllers/homeController');

app.get('/bienvenue', bienvenueController.bienvenue);
app.get('/info', infoController.info);
app.get('/acces-interdit', accesInterditController.accesInterdit);
app.get('/redirection-accueil', redirectionAccueilController.redirectionAccueil);
app.get('/', homeController.home);
app.get('*', homeController.notFound);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
