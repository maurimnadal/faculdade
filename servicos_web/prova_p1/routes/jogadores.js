const express = require("express");
const router = express.Router();
const jogadorController = require("../controllers/jogadorController");

router.get("/", jogadorController.buscarTodos);
router.get("/:id", jogadorController.buscarPorId)
router.post("/", jogadorController.adicionar);

module.exports = router