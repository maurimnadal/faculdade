const express = require("express");
const router = express.Router();
const connection = require("../config/db");
router.get("/", (req, res) => {
    connection.query("SELECT * FROM jogadores", (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar livros");
        res.json(results);
    });
});

module.exports = router