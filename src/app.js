const express = require("express");
const app = express();

app.use(express.json());

app.use("/alunos", require("./routes/alunoRoutes"));
app.use("/produtos", require("./routes/produtoRoutes"));

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});