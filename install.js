module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/CyberAgentAILab/TANGO.git app",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
        }
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "git clone https://github.com/justinjohn0306/Wav2Lip.git",
          "git clone https://github.com/dajes/frame-interpolation-pytorch.git",
          "pip install -r pre-requirements.txt",
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      when: "{{platform !== 'darwin'}}",
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
};
