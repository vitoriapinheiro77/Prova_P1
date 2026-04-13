// services/alunoService.js
const Aluno = require("../models/alunoModel");

exports.listar = (callback) => {
  Aluno.getAll(callback);
};

exports.criar = (nome, idade, callback) => {
  Aluno.create(nome, idade, callback);
};

exports.atualizar = (id, nome, idade, callback) => {
  Aluno.update(id, nome, idade, callback);
};

exports.deletar = (id, callback) => {
  Aluno.delete(id, callback);
};