create database jogos_retro;

use jogos_retro;

create table jogos (
    id int primary key auto_increment,
    nome varchar(100) not null,
    plataforma varchar(100) not null,
    ano_lancamento int not null
);

create table jogadores (
    id int primary key auto_increment,
    nome varchar(100) not null,
    nickname varchar(100) not null unique
);

create table pontuacoes (
    id int primary key auto_increment,
    jogo int not null,
    jogador int not null,
    pontuacao int not null,
    data_registro timestamp default current_timestamp,
    foreign key (jogo) references jogos (id),
    foreign key (jogador) references jogadores (id)
);