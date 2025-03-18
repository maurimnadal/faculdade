import { Agencia } from "./agencia";
import { CartaoDeCredito } from "./cartaoDeCredito";
import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { Gerente } from "./gerente";


//1
let cliente1 = new Cliente

let cartao1 = new CartaoDeCredito(1234)

cliente1.nome = "Cláudio"
cliente1.codigo = 123
cartao1.cliente = cliente1

console.log(cartao1.cliente)

//2


let agencia1 = new Agencia("0001")
let conta1 = new Conta(agencia1)


conta1.agencia = agencia1

console.log(conta1.agencia)

//3
let gerente1 = new Gerente
gerente1.nome = "André"
gerente1.salario = 10000
gerente1.aumentarSalarioTaxaFixa()
console.log(gerente1.salario)


let gerente2 = new Gerente
gerente2.nome = "Ana"
gerente2.salario = 10000
gerente2.aumentarSalarioTaxaVariavel(20)
console.log(gerente2.salario)


//7
let conta2: Conta = new Conta(agencia1)
conta2.numero = 200
conta2.saldo = 2000
conta2.limite = 500

let conta3: Conta = new Conta(agencia1)
conta3.numero = 100
conta3.saldo = 5000

console.log(conta2.transferir(conta3, 1000))
console.log(conta3.transferir(conta2, 10000))

console.log(`${conta2.consultarSaldo()} - ${conta3.consultarSaldo()}`)
