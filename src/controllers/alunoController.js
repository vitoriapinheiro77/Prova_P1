// controllers/alunoController.js
const alunoService = require("../services/alunoService");

exports.listar = (req, res) => {
  alunoService.listar((err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.criar = (req, res) => {
  const { nome, idade } = req.body;

  alunoService.criar(nome, idade, (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ mensagem: "Aluno criado no banco!" });
  });
};

exports.atualizar = (req, res) => {
  const { id } = req.params;
  const { nome, idade } = req.body;

  alunoService.atualizar(id, nome, idade, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ mensagem: "Aluno atualizado!" });
  });
};

exports.deletar = (req, res) => {
  const { id } = req.params;

  alunoService.deletar(id, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ mensagem: "Aluno deletado!" });
  });
};