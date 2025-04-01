const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost", // Endereço do servidor MySQL (ou IP)
    user: "root", // Nome de usuário do MySQL
    password: "", // Senha do usuário
    database: "exemplo_db1", // Nome do banco de dados
});
// Conecta ao banco de dados
connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados MySQL com sucesso!");
});
module.exports = connection;