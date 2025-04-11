import { Cliente } from "./cliente";
import { CartaoDeCredito } from "./cartaoDeCredito";
import { Agencia } from "./agencia";
import { Conta } from "./conta";
import { Funcionario } from "./funcionario";
//2 
let cliente = new Cliente;
cliente.nome = "Cláudio";
let cliente2 = new Cliente;
cliente2.nome = "Ana";
//3
let nubank = new CartaoDeCredito(1900);
let itau = new CartaoDeCredito(3000);
//4
let agencia1 = new Agencia("0001");
let agencia2 = new Agencia("0002");
//5
let conta1 = new Conta(agencia1);
conta1.numero = 200;
let conta2 = new Conta(agencia2);
conta2.numero = 100;
//6
console.log(`Número da Conta: ${conta1.numero} - Saldo: ${conta1.saldo} - Limite: ${conta1.limite}`);
console.log(`Número da Conta: ${conta2.numero} - Saldo: ${conta2.saldo} - Limite: ${conta2.limite}`);
//8
conta1.consultarSaldo();
conta1.depositar(100);
conta1.depositar(-1);
conta1.sacar(3000);
conta1.sacar(1000);
console.log(conta1.exibirExtrato());
console.log(conta1.consultarSaldo());
//9
let funcionario = new Funcionario;
funcionario.nome = "João";
funcionario.salario = 2000;
funcionario.aumentarSalario(10);
console.log(funcionario.consultarDados());
