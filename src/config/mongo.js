const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loja")
  .then(() => console.log("MongoDB conectado!"))
  .catch(err => console.log(err));

module.exports = mongoose;