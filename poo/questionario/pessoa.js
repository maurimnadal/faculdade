class Pessoa {
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    enviarMensagem(mensagem) {
        console.log(mensagem);
    }
}
class Fisica extends Pessoa {
    constructor(rg, cpf, datanasc) {
        super();
        this._rg = rg;
        this._cpf = cpf;
        this._datanasc = datanasc;
    }
    parseDataNasc() {
        if (this._datanasc.includes('/')) {
            // formato "dd/mm/yyyy"
            const [dia, mes, ano] = this._datanasc.split('/').map(Number);
            if (!dia || !mes || !ano)
                return null; // inválido
            return new Date(ano, mes - 1, dia); // mês começa em 0 no JS
        }
        else if (this._datanasc.includes('-')) {
            // formato "yyyy-mm-dd"
            const [ano, mes, dia] = this._datanasc.split('-').map(Number);
            if (!dia || !mes || !ano)
                return null;
            return new Date(ano, mes - 1, dia);
        }
        else {
            return null; // formato desconhecido
        }
    }
    calculaIdade() {
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
    getNome() {
        return this.nome;
    }
}
class Juridica extends Pessoa {
    constructor(razaosocial, cnpj, responsavel) {
        super();
        this._razaosocial = razaosocial;
        this._cnpj = cnpj;
        this._responsavel = responsavel;
    }
    getNomeResponsavel() {
        return this._responsavel.getNome();
    }
    alterarResponsavel(resp) {
        let responsavel_antigo = this._responsavel;
        this._responsavel = resp;
        console.log(`O responsável da empresa de cnpj:${this._cnpj}, foi alterado de ${responsavel_antigo.getNome()} para ${this._responsavel.getNome()}`);
    }
}
class Teste {
    criarPessoaFisica(rg, cpf, datanasc, nome, email, telefone) {
        let pessoaFisica = new Fisica(rg, cpf, datanasc);
        pessoaFisica.nome = nome;
        pessoaFisica.email = email;
        pessoaFisica.telefone = telefone;
        return pessoaFisica;
    }
    criarPessoaJuridica(razaosocial, cnpj, responsavel) {
        let pessoaJuridica = new Juridica(razaosocial, cnpj, responsavel);
        return pessoaJuridica;
    }
    mudarResponsavel(pessoaFisica, pessoaJuridica) {
        pessoaJuridica.alterarResponsavel(pessoaFisica);
    }
    getIdadePessoaFisica(pessoa) {
        return pessoa.calculaIdade();
    }
}
let teste = new Teste();
let pessoa1 = teste.criarPessoaFisica("9999992345", "500.100.300-32", "14/12/2005", "sla", "sla.email", "(54) 999999999");
let pessoa2 = teste.criarPessoaFisica("9999992345", "500.100.300-32", "14/12/2005", "claudio", "claudio.email", "(54) 999999999");
let juridica = teste.criarPessoaJuridica("a", "111111111111", pessoa1);
teste.mudarResponsavel(pessoa2, juridica);
console.log(teste.getIdadePessoaFisica(pessoa1));
