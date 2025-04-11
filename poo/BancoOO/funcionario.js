export class Funcionario {
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
