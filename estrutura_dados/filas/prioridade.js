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
let filaComercialPrioritaria = [];
let filaFinanceiroPrioritaria = [];

function gerarSenha(fila, tipoFila, prioridade = false) {
    const tipo = tipoFila === 'comercial' ? 'C' : 'F';
    const contador = tipoFila === 'comercial' ? contadorComercial++ : contadorFinanceiro++;
    const senha = `${tipo}${String(contador).padStart(3, '0')}`;
    
    if (prioridade) {
        if (tipoFila === 'comercial') {
            filaComercialPrioritaria.push(senha);
        } else if (tipoFila === 'financeiro') {
            filaFinanceiroPrioritaria.push(senha);
        }
    } else {
        fila.enqueue(senha);
    }
    
    return senha;
}

function chamarProximo(tipoFila) {
    let filaPrioritaria = tipoFila === 'comercial' ? filaComercialPrioritaria : filaFinanceiroPrioritaria;
    let filaNormal = tipoFila === 'comercial' ? filaComercial : filaFinanceiro;

    if (filaPrioritaria.length > 0) {
        const proximo = filaPrioritaria.shift();
        return `Atendendo cliente prioritário: ${proximo}`;
    } else {
        const proximo = filaNormal.dequeue();
        return proximo ? `Atendendo cliente: ${proximo}` : 'Nenhum cliente na fila';
    }
}

function mostrarFilas() {
    console.log(`Fila Comercial Prioritária: ${filaComercialPrioritaria.length > 0 ? filaComercialPrioritaria.join(', ') : 'Vazia'}`);
    console.log(`Fila Comercial: ${filaComercial.toString()}`);
    console.log(`Fila Financeira Prioritária: ${filaFinanceiroPrioritaria.length > 0 ? filaFinanceiroPrioritaria.join(', ') : 'Vazia'}`);
    console.log(`Fila Financeira: ${filaFinanceiro.toString()}`);
}

console.log(gerarSenha(filaComercial, 'comercial', true));   
console.log(gerarSenha(filaFinanceiro, 'financeiro'));       
console.log(gerarSenha(filaComercial, 'comercial'));        
console.log(gerarSenha(filaComercial, 'comercial', true));   
console.log(gerarSenha(filaFinanceiro, 'financeiro', true)); 

console.log(chamarProximo('comercial'));     
console.log(chamarProximo('comercial'));     
console.log(chamarProximo('financeiro'));   

mostrarFilas(); 