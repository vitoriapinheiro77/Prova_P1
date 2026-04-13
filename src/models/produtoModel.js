// models/produtoModel.js
const mongoose = require("../config/mongo");

const ProdutoSchema = new mongoose.Schema({
  nome: String,
  preco: Number
});

module.exports = mongoose.model("Produto", ProdutoSchema);