// controllers/produtoController.js
const produtoService = require("../services/produtoService");

exports.criar = async (req, res) => {
  const produto = await produtoService.criar(req.body);
  res.json(produto);
};

exports.listar = async (req, res) => {
  const produtos = await produtoService.listar();
  res.json(produtos);
};

exports.atualizar = async (req, res) => {
  const { id } = req.params;

  const produto = await produtoService.atualizar(id, req.body);
  res.json(produto);
};

exports.deletar = async (req, res) => {
  const { id } = req.params;

  await produtoService.deletar(id);
  res.json({ mensagem: "Produto deletado!" });
};