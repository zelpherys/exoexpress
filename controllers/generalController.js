exports.home = (req, res) => {
    res.send(`
    <ul>
      <li><a href="/bienvenue">Bienvenue</a></li>
      <li><a href="/info">Info</a></li>
      <li><a href="/acces-interdit">Accès interdit</a></li>
      <li><a href="/redirection-accueil">Redirection vers l'accueil</a></li>
    </ul>
  `);
};

exports.notFound = (req, res) => {
    res.status(404).send("error 404 page not found");
};

exports.info = (req, res) => {
    res.json({nom: 'John Doe', age: 30, profession: 'Développeur'});
};

exports.redirectionAccueil = (req, res) => {
    res.redirect('/');
};

exports.accesInterdit = (req, res) => {
    res.status(403).send('Accès interdit');
};
exports.bienvenue = (req, res) => {
    res.send('<h1>Bienvenue sur Express2000!</h1>');
};
