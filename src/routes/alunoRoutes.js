// routes/alunoRoutes.js
const express = require("express");
const router = express.Router();
const controller = require("../controllers/alunoController");

router.get("/", controller.listar);
router.post("/", controller.criar); // 👈 ADICIONA ISSO
router.put("/:id", controller.atualizar);
router.delete("/:id", controller.deletar);

module.exports = router;