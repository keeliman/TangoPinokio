module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",                // Spécifiez le dossier de l'environnement virtuel
        env: {},                    // Variables d'environnement personnalisées si nécessaire
        path: "app",                // Chemin vers le répertoire de l'application
        message: [
          "python app.py",          // Commande pour démarrer l'application TANGO
        ],
        on: [{
          // Expression régulière pour détecter l'URL de démarrage de l'application
          event: "/http:\\/\\/\\S+/",

          // Passe à l'étape suivante tout en maintenant le shell actif
          done: true
        }]
      }
    },
    {
      // Définit la variable locale 'url' pour utilisation dans pinokio.js
      method: "local.set",
      params: {
        // input.event contient l'objet de correspondance de l'expression régulière de l'étape précédente
        url: "{{input.event[0]}}"
      }
    }
  ]
};
