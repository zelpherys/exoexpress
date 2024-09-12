const express = require('express');
const app = express();
const port = 3000;


app.get('/bienvenue', (req, res) => {
    res.send('<h1>Bienvenue sur Express2000!</h1>');
});


app.get('/info', (req, res) => {
    res.json({nom: 'John Doe',age: 30,profession: 'Développeur'});
});


app.get('/acces-interdit', (req, res) => {
    res.status(403).send('Accès interdit');
});


app.get('/redirection-accueil', (req, res) => {
    res.redirect('/');
});


app.get('/', (req, res) => {
    res.send(`
    <ul>
      <li><a href="/bienvenue">Bienvenue</a></li>
      <li><a href="/info">Info</a></li>
      <li><a href="/acces-interdit">Accès interdit</a></li>
      <li><a href="/redirection-accueil">Redirection vers l'accueil</a></li>
    </ul>
  `);
});

app.get('*', (req, res) => {
    res.status(404).send("error 404 page not found");
});


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
