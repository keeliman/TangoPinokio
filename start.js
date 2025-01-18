class Starter {
  async run(req, ondata, kernel) {
    const shell = kernel.shell;

    // Activer l'environnement 'tango' et lancer l'application
    await shell.run('conda activate tango && python app.py', { cwd: 'TANGO' });
  }
}

module.exports = Starter;
