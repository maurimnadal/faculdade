const jogadorModel = require('../models/jogadorModel.js');

exports.buscarTodos = (req, res) => {
    jogadorModel.buscarTodos((err, results) => {
        if (err) return res.status(500).send("Erro ao listar jogadores");
        res.json(results);
    });
};

exports.buscarPorId = (req, res) => {
    jogadorModel.buscarPorId(req.params.id, (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar jogador");
        if (results.length === 0) return res.status(404).send("Jogador não encontrado");
        res.json(results[0]);
    });
};

exports.adicionar = (req, res) => {
    const { nome, nickname } = req.body;

    if (!nome || !nickname) {
        return res.status(400).send("Todos os campos são obrigatórios: nome, nickname");
    }
    jogadorModel.adicionar(req.body, (err) => {
        if (err) {
            console.error("Erro ao cadastrar jogador:", err);
            return res.status(500).send("Erro ao cadastrar jogador");
        }
        res.status(201).send("Jogador cadastrado com sucesso");
    });
};