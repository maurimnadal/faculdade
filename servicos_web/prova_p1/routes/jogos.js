const express = require("express");
const router = express.Router();
const jogoController = require("../controllers/jogoController");
router.get("/", jogoController.buscarTodos);
router.get("/:id", jogoController.buscarPorId);
router.post("/", jogoController.adicionar);
router.put("/:id", jogoController.atualizar);
router.delete("/:id", jogoController.deletar);
module.exports = router;