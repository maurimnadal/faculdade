class Cliente{
    nome: string;
    codigo: number
}

class CartaoDeCredito{
    numero: number;
    data_validade: string
}

class Agencia{
    numero: number
}

class Conta{
    numero: number
    saldo: number
    limite: number = 100 //7
    extrato : string[]

    constructor(){
        this.extrato = new Array
    }

    depositar(valor: number){
        if (valor > 0 ){
            this.saldo += valor
            this.extrato.push(`Depósito: ${valor}`)
            console.log( "Déposito realizado com sucesso")
        }
        else console.log("Valor Inválido")
    }

    sacar(valor: number){
        if (valor < this.saldo && valor > 0){
            this.saldo -= valor
            this.extrato.push(`Saque: ${valor}`)
            console.log("Saque realizado com sucesso")
        }
        else console.log("Valor Inválido")
    }

    exibirExtrato(){
        for(let i of this.extrato){
            console.log(i)
        }
    }

    consultarSaldo(){
        console.log(`Saldo Dísponivel: ${this.saldo}R$`)
    }
}

class Funcionario{
    nome: string
    salario: number

    aumentarSalario(porcentagem: number){
        this.salario += this.salario * (porcentagem / 100)
    }

    consultarDados(){
        console.log(`Nome: ${this.nome} - Salário: ${this.salario}`)
    }
}


//2 
let cliente = new Cliente
cliente.nome = "Cláudio"
cliente.codigo = 1

let cliente2 = new Cliente
cliente2.nome = "Ana"
cliente2.codigo = 2


//3
let nubank = new CartaoDeCredito
nubank.numero = 1900
nubank.data_validade = "12-05-2030"

let itau = new CartaoDeCredito
itau.numero = 3000
itau.data_validade = "11-02-2031"


//4
let agencia1 = new Agencia
agencia1.numero = 1000

let agencia2 = new Agencia
agencia2.numero = 2000


//5
let conta1 = new Conta
conta1.numero = 200
conta1.saldo = 2000
conta1.limite = 5000

let conta2 = new Conta
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
conta1.exibirExtrato()
conta1.consultarSaldo()


//9
let funcionario = new Funcionario
funcionario.nome = "João"
funcionario.salario = 2000
funcionario.aumentarSalario(10)
funcionario.consultarDados()






