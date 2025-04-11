export class CartaoDeCredito {
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
