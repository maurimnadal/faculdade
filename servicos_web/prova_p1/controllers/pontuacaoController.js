const pontuacaoModel = require("../models/pontuacaoModel")
const jogoModel = require("../models/jogoModel");
const jogadorModel = require('../models/jogadorModel.js');

exports.adicionar = (req, res) => {
    const { jogo_id, jogador_id, pontuacao } = req.body;

    if (!jogo_id || !jogador_id || pontuacao == null) {
        return res.status(400).send("Todos os campos são obrigatórios: jogo_id, jogador_id, pontuacao");
    }

    if (pontuacao < 0) {
        return res.status(400).send("A pontuação deve ser um número positivo");
    }

    validarIdJogo(jogo_id, (err, jogoExiste) => {
        if (err) {
            console.error("Erro ao validar jogo:", err);
            return res.status(500).send("Erro ao validar jogo");
        }
        if (!jogoExiste) {
            return res.status(400).send("Jogo não encontrado");
        }

        validarIdJogador(jogador_id, (err, jogadorExiste) => {
            if (err) {
                console.error("Erro ao validar jogador:", err);
                return res.status(500).send("Erro ao validar jogador");
            }
            if (!jogadorExiste) {
                return res.status(400).send("Jogador não encontrado");
            }

            pontuacaoModel.adicionar(req.body, (err) => {
                if (err) {
                    console.error("Erro ao adicionar pontuação:", err);
                    return res.status(500).send("Erro ao adicionar pontuação"); 
                }

                return res.status(201).send("Pontuação adicionada com sucesso"); 
            });
        });
    });
};


exports.rankingPorJogo = (req, res) => {
    const jogo_id = req.params.idJogo;

    validarIdJogo(jogo_id, (err, jogoExiste) => {
        if (err) {
            console.error("Erro ao validar jogo:", err);
            return res.status(500).send("Erro ao validar jogo");
        }
        if (!jogoExiste) {
            return res.status(400).send("Jogo não encontrado");
        }

        pontuacaoModel.rankingPorJogo(jogo_id, (err, results) => {
            if (err) return res.status(500).send("Erro ao buscar ranking");
            if (results.length === 0) return res.status(404).send("Sem pontuações para este jogo");
            res.json(results);
        });
    });
};


exports.buscarJogosMaisPopulares = (req, res) => {
    pontuacaoModel.buscarJogosMaisPopulares((err, results) => {
        if (err) return res.status(500).send("Erro ao listar jogos mais populares");
        res.json(results);
    });
}


function validarIdJogo(jogo_id, callback) {
    jogoModel.buscarPorId(jogo_id, (err, results) => {
        if (err) return callback(err, false);
        if (results.length === 0) return callback(null, false);
        return callback(null, true);
    });
}


function validarIdJogador(jogador_id, callback) {
    jogadorModel.buscarPorId(jogador_id, (err, results) => {
        if (err) return callback(err, false);
        if (results.length === 0) return callback(null, false);
        return callback(null, true);
    });
}