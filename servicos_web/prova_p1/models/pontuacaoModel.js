const connection = require("../config/db");

exports.adicionar = (dados, callback) => {
    const { jogo_id, jogador_id, pontuacao } = dados;
    const sql = "INSERT INTO pontuacoes (jogo_id, jogador_id, pontuacao) VALUES (?, ?, ?)";
    connection.query(sql, [jogo_id, jogador_id, pontuacao], callback);
};


exports.rankingPorJogo = (idJogo, callback) => {
    connection.query(
        `
        SELECT j.nickname, SUM(p.pontuacao) AS pontuacao_total 
        FROM pontuacoes p 
        LEFT JOIN jogadores j ON p.jogador_id = j.id
        WHERE p.jogo_id = ? 
        GROUP BY j.nickname
        ORDER BY pontuacao_total DESC 
        LIMIT 10;
        `, [idJogo], callback
    );
}


exports.buscarJogosMaisPopulares = (callback) => {
    connection.query(
        `
        SELECT j.nome, COUNT(*) AS contagem_pontuacoes FROM pontuacoes p
        LEFT JOIN jogos j
        ON p.jogo_id = j.id
        GROUP BY j.nome
        ORDER BY contagem_pontuacoes DESC
        LIMIT 3
        `, callback
    )
}