const express = require('express');
const app = express();
const port = 3000;

// const bienvenueController = require('./controllers/bienvenueController');
// const infoController = require('./controllers/infoController');
// const accesInterditController = require('./controllers/accesInterditController');
// const redirectionAccueilController = require('./controllers/redirectionController');
// const homeController = require('./controllers/homeController');

const generalController = require('./controllers/generalController')

app.get('/bienvenue', generalController.bienvenue);
app.get('/info', generalController.info);
app.get('/acces-interdit', generalController.accesInterdit);
app.get('/redirection-accueil', generalController.redirectionAccueil);
app.get('/', generalController.home);
app.get('*', generalController.notFound);

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
