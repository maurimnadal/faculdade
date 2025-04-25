const pontuacaoModel = require("../models/pontuacaoModel")
const jogoModel = require("../models/jogoModel");
const jogadorModel = require('../models/jogadorModel.js');

exports.adicionar = (req, res) => {
    const { jogo_id, jogador_id, pontuacao } = req.body;

    if (!jogo_id || !jogador_id || !pontuacao) {
        return res.status(400).send("Todos os campos são obrigatórios: jogo_id, jogador_id, pontuacao");
    }

    if (pontuacao < 0) {
        return res.status(400).send("A pontuação deve ser um número positivo");
    }

    jogoModel.buscarPorId(jogo_id, (err, jogoResults) => {
        if (err) {
            console.error("Erro ao buscar jogo:", err);
            return res.status(500).send("Erro ao validar jogo");
        }

        if (jogoResults.length === 0) {
            return res.status(400).send("Jogo não encontrado");
        }

        jogadorModel.buscarPorId(jogador_id, (err, jogadorResults) => {
            if (err) {
                console.error("Erro ao buscar jogador:", err);
                return res.status(500).send("Erro ao validar jogador");
            }

            if (jogadorResults.length === 0) {
                return res.status(400).send("Jogador não encontrado");
            }

            pontuacaoModel.adicionar(req.body, (err) => {
                if (err) {
                    console.error("Erro ao adicionar pontuação:", err);
                    return res.status(500).send("Erro ao adicionar pontuação");
                }

                res.status(201).send("Pontuação adicionada com sucesso");
            });
        });
    });
};

//TODO: validação id de jogo
exports.rankingPorJogo = (req, res) => {
    pontuacaoModel.rankingPorJogo(req.params.idJogo, (err, results) => {
        if (err) return res.status(500).send("Erro ao buscar ranking");
        if (results.length === 0) return res.status(404).send("Id do jogo não encontrado");
        res.json(results);
    });
}

exports.buscarJogosMaisPopulares = (req, res) => {
    pontuacaoModel.buscarJogosMaisPopulares((err, results) => {
        if (err) return res.status(500).send("Erro ao listar jogos mais populares");
        res.json(results);
    });
}