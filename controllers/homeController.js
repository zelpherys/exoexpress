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
