var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    return Cliente;
}());
var CartaoDeCredito = /** @class */ (function () {
    function CartaoDeCredito() {
    }
    return CartaoDeCredito;
}());
var Agencia = /** @class */ (function () {
    function Agencia() {
    }
    return Agencia;
}());
var Conta = /** @class */ (function () {
    function Conta() {
        this.limite = 100; //7
        this.extrato = new Array;
    }
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            this.extrato.push("Dep\u00F3sito: ".concat(valor));
            console.log("Déposito realizado com sucesso");
        }
        else
            console.log("Valor Inválido");
    };
    Conta.prototype.sacar = function (valor) {
        if (valor < this.saldo && valor > 0) {
            this.saldo -= valor;
            this.extrato.push("Saque: ".concat(valor));
            console.log("Saque realizado com sucesso");
        }
        else
            console.log("Valor Inválido");
    };
    Conta.prototype.exibirExtrato = function () {
        for (var _i = 0, _a = this.extrato; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    Conta.prototype.consultarSaldo = function () {
        console.log("Saldo D\u00EDsponivel: ".concat(this.saldo, "R$"));
    };
    return Conta;
}());
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Funcionario.prototype.aumentarSalario = function (porcentagem) {
        this.salario += this.salario * (porcentagem / 100);
    };
    Funcionario.prototype.consultarDados = function () {
        console.log("Nome: ".concat(this.nome, " - Sal\u00E1rio: ").concat(this.salario));
    };
    return Funcionario;
}());
//2 
var cliente = new Cliente;
cliente.nome = "Cláudio";
cliente.codigo = 1;
var cliente2 = new Cliente;
cliente2.nome = "Ana";
cliente2.codigo = 2;
//3
var nubank = new CartaoDeCredito;
nubank.numero = 1900;
nubank.data_validade = "12-05-2030";
var itau = new CartaoDeCredito;
itau.numero = 3000;
itau.data_validade = "11-02-2031";
//4
var agencia1 = new Agencia;
agencia1.numero = 1000;
var agencia2 = new Agencia;
agencia2.numero = 2000;
//5
var conta1 = new Conta;
conta1.numero = 200;
conta1.saldo = 2000;
conta1.limite = 5000;
var conta2 = new Conta;
conta2.numero = 100;
conta2.saldo = 5000;
//6
console.log("N\u00FAmero da Conta: ".concat(conta1.numero, " - Saldo: ").concat(conta1.saldo, " - Limite: ").concat(conta1.limite));
console.log("N\u00FAmero da Conta: ".concat(conta2.numero, " - Saldo: ").concat(conta2.saldo, " - Limite: ").concat(conta2.limite));
//8
conta1.consultarSaldo();
conta1.depositar(100);
conta1.depositar(-1);
conta1.sacar(3000);
conta1.sacar(1000);
conta1.exibirExtrato();
conta1.consultarSaldo();
//9
var funcionario = new Funcionario;
funcionario.nome = "João";
funcionario.salario = 2000;
funcionario.aumentarSalario(10);
funcionario.consultarDados();
