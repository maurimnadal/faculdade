"use strict";
exports.__esModule = true;
var cliente_1 = require("./cliente");
var cartaoDeCredito_1 = require("./cartaoDeCredito");
var agencia_1 = require("./agencia");
var conta_1 = require("./conta");
var funcionario_1 = require("./funcionario");
//2 
var cliente = new cliente_1.Cliente;
cliente.nome = "Cláudio";
cliente.codigo = 1;
var cliente2 = new cliente_1.Cliente;
cliente2.nome = "Ana";
cliente2.codigo = 2;
//3
var nubank = new cartaoDeCredito_1.CartaoDeCredito;
nubank.numero = 1900;
nubank.data_validade = "12-05-2030";
var itau = new cartaoDeCredito_1.CartaoDeCredito;
itau.numero = 3000;
itau.data_validade = "11-02-2031";
//4
var agencia1 = new agencia_1.Agencia;
agencia1.numero = 1000;
var agencia2 = new agencia_1.Agencia;
agencia2.numero = 2000;
//5
var conta1 = new conta_1.Conta;
conta1.numero = 200;
conta1.saldo = 2000;
conta1.limite = 500;
var conta2 = new conta_1.Conta;
conta2.numero = 100;
conta2.saldo = 5000;
//6
console.log("N\u00FAmero da Conta: ".concat(conta1.numero, " - Saldo: ").concat(conta1.saldo, " - Limite: ").concat(conta1.limite));
console.log("N\u00FAmero da Conta: ".concat(conta2.numero, " - Saldo: ").concat(conta2.saldo, " - Limite: ").concat(conta2.limite));
//8
conta1.consultarSaldo();
conta1.depositar(100);
conta1.depositar(-1);
conta1.sacar(3000);
conta1.sacar(1000);
console.log(conta1.exibirExtrato());
console.log(conta1.consultarSaldo());
//9
var funcionario = new funcionario_1.Funcionario;
funcionario.nome = "João";
funcionario.salario = 2000;
funcionario.aumentarSalario(10);
console.log(funcionario.consultarDados());
