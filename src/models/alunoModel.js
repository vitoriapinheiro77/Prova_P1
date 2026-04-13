// models/alunoModel.js
const db = require("../config/mysql");

const Aluno = {
  getAll: (callback) => {
    db.query("SELECT * FROM alunos", callback);
  },

  create: (nome, idade, callback) => {
    db.query(
      "INSERT INTO alunos (nome, idade) VALUES (?, ?)",
      [nome, idade],
      callback
    );
  },

  update: (id, nome, idade, callback) => {
    db.query(
      "UPDATE alunos SET nome = ?, idade = ? WHERE id = ?",
      [nome, idade, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM alunos WHERE id = ?", [id], callback);
  }
};

module.exports = Aluno;

