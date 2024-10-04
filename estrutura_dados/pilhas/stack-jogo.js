class Stack{
    constructor() {
        this._count = 0;
        this._items = {};
    }

    push(element){
        this._items[this._count] = element
        this._count++
    }

    size(){
        return this._count
    }

    isEmpty(){
        return this._count === 0
    }

    clear(){
        this._count = 0
        this._items = {}
    }

    pop(){
        if(this.isEmpty()){
            return undefined
        }
        this._count--
        const result = this._items[this._count]
        delete this._items[this._count]
        return result
    }

    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this._items[this._count - 1]
    }

    toString(){
        if(this.isEmpty()){
            return  ''
        }
        let objString = `${this._items[0]}`
        for(let i = 1; i < this._count; i++){
            objString = `${objString}, ${this._items[i]}`
        }
        return objString
    }
}

function criarPilhaAleatoria() {
    const pilha = new Stack();
    for (let i = 0; i < 3; i++) {
        const valorAleatorio = Math.floor(Math.random() * 9) + 1;
        pilha.push(valorAleatorio);
    }
    return pilha;
}

const pilha1 = criarPilhaAleatoria();
const pilha2 = criarPilhaAleatoria();
const pilha3 = criarPilhaAleatoria();

let pontuacao_1 = 0;
let pontuacao_2 = 0;
let pontuacao_3 = 0;
let soma = 0;

for (let r = 0; r < 3; r++) {
    const valor1 = pilha1.pop();
    const valor2 = pilha2.pop();
    const valor3 = pilha3.pop();

    console.log(`Rodada ${r + 1}:`);
    console.log(`Pilha 1: ${valor1}, Pilha 2: ${valor2}, Pilha 3: ${valor3}`);


    if (valor1 > valor2 && valor1 > valor3) {
        pontuacao_1 += valor1 + valor2 + valor3 + soma;
        soma = 0; 
        console.log("Pilha 1 ganhou a rodada!");
    } else if (valor2 > valor1 && valor2 > valor3) {
        pontuacao_2 += valor1 + valor2 + valor3 + soma;
        soma = 0;  
        console.log("Pilha 2 ganhou a rodada!");
    } else if (valor3 > valor1 && valor3 > valor2) {
        pontuacao_3 += valor1 + valor2 + valor3 + soma;
        soma = 0;  
        console.log("Pilha 3 ganhou a rodada!");
    } else {
        soma += valor1 + valor2 + valor3;
        console.log("Empate!");
    }

    console.log(`Pontuação atual: Pilha 1 = ${pontuacao_1}, Pilha 2 = ${pontuacao_2}, Pilha 3 = ${pontuacao_3}`);
}

console.log("Fim do jogo!");
if (pontuacao_1 > pontuacao_2 && pontuacao_1 > pontuacao_3) {
    console.log("Pilha 1 é a vencedora com", pontuacao_1, "pontos!");
} else if (pontuacao_2 > pontuacao_1 && pontuacao_2 > pontuacao_3) {
    console.log("Pilha 2 é a vencedora com", pontuacao_2, "pontos!");
} else if (pontuacao_3 > pontuacao_1 && pontuacao_3 > pontuacao_2) {
    console.log("Pilha 3 é a vencedora com", pontuacao_3, "pontos!");
} else {
    console.log("O jogo terminou em empate!");
}