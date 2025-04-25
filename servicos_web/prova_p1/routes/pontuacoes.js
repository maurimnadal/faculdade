const express = require("express");
const router = express.Router();
const pontuacaoController = require("../controllers/pontuacaoController");

router.post("/", pontuacaoController.adicionar)
router.get("/ranking/:idJogo", pontuacaoController.rankingPorJogo)
router.get("/jogos/populares", pontuacaoController.buscarJogosMaisPopulares)

module.exports = router