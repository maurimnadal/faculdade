abstract class Pessoa {

    private _nome: string
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }

    private _telefone: string
    public get telefone(): string {
        return this._telefone
    }
    public set telefone(value: string) {
        this._telefone = value
    }

    private _email: string
    public get email(): string {
        return this._email
    }
    public set email(value: string) {
        this._email = value
    }


    enviarMensagem(mensagem: string): void {

        console.log(mensagem)

    }

}



class Fisica extends Pessoa {

    private _rg: string

    private _cpf: string

    private _datanasc: string



    constructor(rg: string, cpf: string, datanasc: string) {

        super()

        this._rg = rg

        this._cpf = cpf

        this._datanasc = datanasc

    }



    private parseDataNasc(): Date | null {
        if (this._datanasc.includes('/')) {
            // formato "dd/mm/yyyy"
            const [dia, mes, ano] = this._datanasc.split('/').map(Number);
            if (!dia || !mes || !ano) return null; // inválido
            return new Date(ano, mes - 1, dia); // mês começa em 0 no JS
        } else if (this._datanasc.includes('-')) {
            // formato "yyyy-mm-dd"
            const [ano, mes, dia] = this._datanasc.split('-').map(Number);
            if (!dia || !mes || !ano) return null;
            return new Date(ano, mes - 1, dia);
        } else {
            return null; // formato desconhecido
        }
    }

    calculaIdade(): number {
        const nascimento = this.parseDataNasc();
        if (!nascimento || isNaN(nascimento.getTime())) {
            throw new Error("Data de nascimento inválida: " + this._datanasc);
        }

        const hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mesAtual = hoje.getMonth();
        const mesNascimento = nascimento.getMonth();

        if (mesAtual < mesNascimento || (mesAtual === mesNascimento && hoje.getDate() < nascimento.getDate())) {
            idade--; // ainda não fez aniversário este ano
        }

        return idade;
    }

    getNome(): string {
        return this.nome;
    }

}



class Juridica extends Pessoa {

    private _razaosocial: string

    private _cnpj: string

    private _responsavel: Fisica



    constructor(razaosocial: string, cnpj: string, responsavel: Fisica) {

        super()

        this._razaosocial = razaosocial

        this._cnpj = cnpj

        this._responsavel = responsavel
    }

    getNomeResponsavel(): string {
        return this._responsavel.getNome();
    }

    alterarResponsavel(resp: Fisica): void {
        let responsavel_antigo: Fisica = this._responsavel 
        this._responsavel = resp
        console.log(`O responsável da empresa de cnpj:${this._cnpj}, foi alterado de ${responsavel_antigo.getNome()} para ${this._responsavel.getNome()}`)
    }

}



class Teste{
    criarPessoaFisica(rg: string, cpf: string, datanasc: string, nome: string, email: string, telefone: string): Fisica{
        let pessoaFisica: Fisica = new Fisica(rg, cpf, datanasc)
        pessoaFisica.nome = nome
        pessoaFisica.email = email
        pessoaFisica.telefone = telefone

        return pessoaFisica
    }

    criarPessoaJuridica(razaosocial: string, cnpj: string, responsavel: Fisica): Juridica{
        let pessoaJuridica: Juridica = new Juridica(razaosocial, cnpj, responsavel)

        return pessoaJuridica
    }

    mudarResponsavel(pessoaFisica: Fisica, pessoaJuridica: Juridica): void{
        pessoaJuridica.alterarResponsavel(pessoaFisica)
    }

    getIdadePessoaFisica(pessoa: Fisica): number{
        return pessoa.calculaIdade()
    }
}

let teste = new Teste()
let pessoa1: Fisica = teste.criarPessoaFisica("9999992345", "500.100.300-32", "14/12/2005", "sla", "sla.email", "(54) 999999999")      
let pessoa2: Fisica = teste.criarPessoaFisica("9999992345", "500.100.300-32", "14/12/2005", "claudio", "claudio.email", "(54) 999999999")         
let juridica: Juridica = teste.criarPessoaJuridica("a", "111111111111", pessoa1)

teste.mudarResponsavel(pessoa2, juridica)

console.log(teste.getIdadePessoaFisica(pessoa1))

