import { Cliente } from "./cliente"
import { CartaoDeCredito } from "./cartaoDeCredito"
import { Agencia } from "./agencia"
import { Conta } from "./conta"
import { Funcionario } from "./funcionario"

//2 
let cliente: Cliente = new Cliente
cliente.nome = "Cláudio"
cliente.codigo = 1

let cliente2: Cliente = new Cliente
cliente2.nome = "Ana"
cliente2.codigo = 2


//3
let nubank: CartaoDeCredito = new CartaoDeCredito(1900)
nubank.data_validade = "12-05-2030"

let itau: CartaoDeCredito = new CartaoDeCredito(3000)

itau.data_validade = "11-02-2031"


//4
let agencia1: Agencia = new Agencia("0001")


let agencia2: Agencia = new Agencia("0002")



//5
let conta1: Conta = new Conta(agencia1)
conta1.numero = 200
conta1.saldo = 2000
conta1.limite = 500

let conta2: Conta = new Conta(agencia2)
conta2.numero = 100
conta2.saldo = 5000


//6
console.log(`Número da Conta: ${conta1.numero} - Saldo: ${conta1.saldo} - Limite: ${conta1.limite}`)
console.log(`Número da Conta: ${conta2.numero} - Saldo: ${conta2.saldo} - Limite: ${conta2.limite}`)


//8
conta1.consultarSaldo()
conta1.depositar(100)
conta1.depositar(-1)
conta1.sacar(3000)
conta1.sacar(1000)
console.log(conta1.exibirExtrato())
console.log(conta1.consultarSaldo())


//9
let funcionario: Funcionario = new Funcionario
funcionario.nome = "João"
funcionario.salario = 2000
funcionario.aumentarSalario(10)
console.log(funcionario.consultarDados())

