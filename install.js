class Installer {
  async run(req, ondata, kernel) {
    const shell = kernel.shell;

    // Cloner le dépôt principal TANGO
    await shell.run('git clone https://github.com/CyberAgentAILab/TANGO.git');

    // Cloner les sous-dépôts requis dans le répertoire TANGO
    await shell.run('git clone https://github.com/justinjohn0306/Wav2Lip.git', { cwd: 'TANGO' });
    await shell.run('git clone https://github.com/dajes/frame-interpolation-pytorch.git', { cwd: 'TANGO' });

    // Créer un environnement Conda nommé 'tango' avec Python 3.9.20
    await shell.run('conda create -n tango python=3.9.20 -y');

    // Activer l'environnement 'tango' et installer les dépendances
    await shell.run('conda activate tango && pip install -r pre-requirements.txt && pip install -r requirements.txt', { cwd: 'TANGO' });
  }
}

module.exports = Installer;
