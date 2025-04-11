class Agencia {
    constructor(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
}
class CartaoDeCredito {
    constructor(numero) {
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get data_validade() {
        return this._data_validade;
    }
    get cliente() {
        return this._cliente;
    }
}
class Cliente {
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get codigo() {
        return this._codigo;
    }
}
class Conta {
    constructor(agencia) {
        this._limite = 100; //7
        this._extrato = "";
        this._agencia = agencia;
    }
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get saldo() {
        return this._saldo;
    }
    get limite() {
        return this._limite;
    }
    get extrato() {
        return this._extrato;
    }
    get agencia() {
        return this._agencia;
    }
    set agencia(value) {
        this._agencia = value;
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            this._extrato += `Depósito: ${valor}\n`;
        }
    }
    sacar(valor) {
        if (valor <= this._saldo + this._limite && valor > 0) {
            this._saldo -= valor;
            this._extrato += `Saque: ${valor}\n`;
            return true;
        }
        return false;
    }
    exibirExtrato() {
        return this._extrato;
    }
    consultarSaldo() {
        return this._saldo + this._limite;
    }
    transferir(conta_destino, valor) {
        if (valor <= this._saldo + this._limite && valor > 0) {
            this._saldo -= valor;
            conta_destino._saldo += valor;
            return true;
        }
        return false;
    }
}
class Funcionario {
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    aumentarSalario(porcentagem) {
        this._salario += this._salario * porcentagem / 100;
    }
    consultarDados() {
        return `Nome: ${this._nome} - Salário: ${this._salario} R$`;
    }
}
class Gerente {
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get salario() {
        return this._salario;
    }
    set salario(value) {
        this._salario = value;
    }
    aumentarSalarioTaxaFixa() {
        this.aumentarSalarioTaxaVariavel(10);
    }
    aumentarSalarioTaxaVariavel(porcentagem) {
        this._salario += this._salario * porcentagem / 100;
    }
}
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
