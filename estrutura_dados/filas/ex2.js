class Queue {
    constructor() {
        this._count = 0;
        this._items = {};
    }

    enqueue(element) {
        this._items[this._count] = element;
        this._count++;
    }

    isEmpty() {
        return this._count === 0;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const result = this._items[0];

        for (let i = 0; i < this._count - 1; i++) {
            this._items[i] = this._items[i + 1];
        }

        delete this._items[this._count - 1];
        this._count--;
        return result;
    }

    nextElement() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._items[0];
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `primeiro - ${this._items[0]}`;
        for (let i = 1; i < this._count; i++) {
            objString = `${objString}, ${this._items[i]}`;
        }
        return objString;
    }
}

let filaComercial = new Queue();
let filaFinanceiro = new Queue();
let contadorComercial = 1;
let contadorFinanceiro = 1;


function gerarSenha(tipo) {
    if (tipo === 'comercial') {
        const senha = `C${String(contadorComercial).padStart(3, '0')}`;
        contadorComercial++;
        filaComercial.enqueue(senha);
        return senha;
    } else if (tipo === 'financeiro') {
        const senha = `F${String(contadorFinanceiro).padStart(3, '0')}`;
        contadorFinanceiro++;
        filaFinanceiro.enqueue(senha);
        return senha;
    }
    return 'Tipo de atendimento inválido';
}


function chamarProximo(tipo) {
    if (tipo === 'comercial') {
        const proximo = filaComercial.dequeue();
        return proximo ? `Atendendo cliente comercial: ${proximo}` : 'Nenhum cliente na fila comercial';
    } else if (tipo === 'financeiro') {
        const proximo = filaFinanceiro.dequeue();
        return proximo ? `Atendendo cliente financeiro: ${proximo}` : 'Nenhum cliente na fila financeira';
    }
    return 'Tipo de atendimento inválido';
}


function mostrarFilas() {
    console.log(`Fila Comercial: ${filaComercial.toString()}`);
    console.log(`Fila Financeira: ${filaFinanceiro.toString()}`);
}

console.log(gerarSenha('comercial')); 
console.log(gerarSenha('financeiro')); 
console.log(gerarSenha('comercial'));  
console.log(chamarProximo('comercial')); 
console.log(chamarProximo('financeiro'));
mostrarFilas(); 