CREATE DATABASE jogos_retro;

USE jogos_retro;

CREATE TABLE jogos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    ano_lancamento INT NOT NULL
);

CREATE TABLE jogadores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nickname VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE pontuacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    jogo_id INT NOT NULL,
    jogador_id INT NOT NULL,
    pontuacao INT NOT NULL,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (jogo_id) REFERENCES jogos (id),
    FOREIGN KEY (jogador_id) REFERENCES jogadores (id)
);