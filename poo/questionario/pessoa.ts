abstract class Pessoa {

    private _nome: string

    private _telefone: string

    private _email: string

    constructor(nome: string, telefone: string, email: string){
        this._nome  = nome
        this._email = email
        this._telefone = telefone
    }

    enviarMensagem(mensagem: string): void {

        console.log(mensagem)

    }

}



class Fisica extends Pessoa {

    private _rg: string

    private _cpf: string

    private _datanasc: string



    constructor(nome: string,telefone: string, email: string, rg: string, cpf: string, datanasc: string) {

        super(nome, telefone, email)

        this._rg = rg

        this._cpf = cpf

        this._datanasc = datanasc

    }



    calculaIdade(calculo: number): number {
        return calculo
    }

}



class Juridica extends Pessoa {

    private _razaosocial: string

    private _cnpj: string

    private _responsavel: Fisica



    constructor(nome: string, telefone: string, email: string, razaosocial: string, cnpj: string, responsavel: Fisica) {

        super(nome, telefone, email)

        this._razaosocial = razaosocial

        this._cnpj = cnpj

        this._responsavel = responsavel

    }



    alterarResponsavel(resp: Fisica): void {
        let responsavel_antigo: Fisica = this._responsavel 
        this._responsavel = resp
        console.log(`O responsável da empresa de cnpj:${this._cnpj}, foi alterado de ${responsavel_antigo} para ${this._responsavel}`)
    }

}



class Teste{
    constructor(){
        let fisica1: Fisica = new Fisica("Cláudio", "9999", "claudio.com", "2", "22", "222")
        let fisica2: Fisica = new Fisica("André", "1111", "andre.com", "1", "11", "111")
        let juridica: Juridica = new Juridica("Cláudio", "9999", "claudio.com", "a", "0001", fisica1)
        juridica.alterarResponsavel(fisica2)
    }
}

let teste = new Teste()