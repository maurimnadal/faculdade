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
    limite: number = 100
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



let cliente = new Cliente
cliente.nome = "Cláudio"
cliente.codigo = 1

let nubank = new CartaoDeCredito
nubank.numero = 1900
nubank.data_validade = "12-05-2030"

let agencia1 = new Agencia
agencia1.numero = 1000

let conta1 = new Conta
conta1.numero = 200
conta1.saldo = 2000
conta1.limite = 5000
console.log(`Número da Conta: ${conta1.numero}\nSaldo: ${conta1.saldo}\nLimite: ${conta1.limite}`)

conta1.consultarSaldo()
conta1.depositar(100)
conta1.depositar(-1)
conta1.sacar(3000)
conta1.sacar(1000)
conta1.exibirExtrato()
conta1.consultarSaldo()






