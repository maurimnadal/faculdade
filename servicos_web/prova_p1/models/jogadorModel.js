const connection = require("../config/db");

exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM jogadores", callback);
};

exports.buscarPorId = (id, callback) => {
    connection.query("SELECT * FROM jogadores WHERE id = ?", [id], callback);
};

exports.adicionar = (dados, callback) => {
    const { nome, nickname } = dados;
    const sql = "INSERT INTO jogadores (nome, nickname) VALUES (?, ?)";
    connection.query(sql, [nome, nickname], callback);
};