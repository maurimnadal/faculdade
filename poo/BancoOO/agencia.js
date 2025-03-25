export class Agencia {
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
