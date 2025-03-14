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
        this.limite = 100;
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
var cliente = new Cliente;
cliente.nome = "Cláudio";
cliente.codigo = 1;
var nubank = new CartaoDeCredito;
nubank.numero = 1900;
nubank.data_validade = "12-05-2030";
var agencia1 = new Agencia;
agencia1.numero = 1000;
var conta1 = new Conta;
conta1.numero = 200;
conta1.saldo = 2000;
conta1.limite = 5000;
console.log("N\u00FAmero da Conta: ".concat(conta1.numero, "\nSaldo: ").concat(conta1.saldo, "\nLimite: ").concat(conta1.limite));
conta1.consultarSaldo();
conta1.depositar(100);
conta1.depositar(-1);
conta1.sacar(3000);
conta1.sacar(1000);
conta1.exibirExtrato();
conta1.consultarSaldo();
