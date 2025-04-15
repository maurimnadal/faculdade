class Pessoa {
    constructor(nome, telefone, email) {
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
    }
    enviarMensagem(mensagem) {
        console.log(mensagem);
    }
}
class Fisica extends Pessoa {
    constructor(nome, telefone, email, rg, cpf, datanasc) {
        super(nome, telefone, email);
        this._rg = rg;
        this._cpf = cpf;
        this._datanasc = datanasc;
    }
    calculaIdade(calculo) {
        return calculo;
    }
}
class Juridica extends Pessoa {
    constructor(nome, telefone, email, razaosocial, cnpj, responsavel) {
        super(nome, telefone, email);
        this._razaosocial = razaosocial;
        this._cnpj = cnpj;
        this._responsavel = responsavel;
    }
    alterarResponsavel(resp) {
        let responsavel_antigo = this._responsavel;
        this._responsavel = resp;
        console.log(`O responsável da empresa de cnpj:${this._cnpj}, foi alterado de ${responsavel_antigo} para ${this._responsavel}`);
    }
}
class Teste {
    constructor() {
        let fisica1 = new Fisica("Cláudio", "9999", "claudio.com", "2", "22", "222");
        let fisica2 = new Fisica("André", "1111", "andre.com", "1", "11", "111");
        let juridica = new Juridica("Cláudio", "9999", "claudio.com", "a", "0001", fisica1);
        juridica.alterarResponsavel(fisica2);
    }
}
let teste = new Teste();
