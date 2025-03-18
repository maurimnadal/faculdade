"use strict";
exports.__esModule = true;
var agencia_1 = require("./agencia");
var cartaoDeCredito_1 = require("./cartaoDeCredito");
var cliente_1 = require("./cliente");
var conta_1 = require("./conta");
var gerente_1 = require("./gerente");
//1
var cliente1 = new cliente_1.Cliente;
var cartao1 = new cartaoDeCredito_1.CartaoDeCredito(1234);
cliente1.nome = "Cláudio";
cliente1.codigo = 123;
cartao1.cliente = cliente1;
console.log(cartao1.cliente);
//2
var agencia1 = new agencia_1.Agencia("0001");
var conta1 = new conta_1.Conta(agencia1);
conta1.agencia = agencia1;
console.log(conta1.agencia);
//3
var gerente1 = new gerente_1.Gerente;
gerente1.nome = "André";
gerente1.salario = 10000;
gerente1.aumentarSalarioTaxaFixa();
console.log(gerente1.salario);
var gerente2 = new gerente_1.Gerente;
gerente2.nome = "Ana";
gerente2.salario = 10000;
gerente2.aumentarSalarioTaxaVariavel(20);
console.log(gerente2.salario);
//7
var conta2 = new conta_1.Conta(agencia1);
conta2.numero = 200;
conta2.saldo = 2000;
conta2.limite = 500;
var conta3 = new conta_1.Conta(agencia1);
conta3.numero = 100;
conta3.saldo = 5000;
console.log(conta2.transferir(conta3, 1000));
console.log(conta3.transferir(conta2, 10000));
console.log("".concat(conta2.consultarSaldo(), " - ").concat(conta3.consultarSaldo()));
