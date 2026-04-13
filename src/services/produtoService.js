// services/produtoService.js
const Produto = require("../models/produtoModel");

exports.criar = async (dados) => {
  return await Produto.create(dados);
};

exports.listar = async () => {
  return await Produto.find();
};

exports.atualizar = async (id, dados) => {
  return await Produto.findByIdAndUpdate(id, dados, { new: true });
};

exports.deletar = async (id) => {
  return await Produto.findByIdAndDelete(id);
};