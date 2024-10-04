class Stack {
    constructor() {
        this._items = [];
    }

    push(element) {
        this._items.push(element);
    }

    pop() {
        return this._items.pop();
    }

    peek() {
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length === 0;
    }

    size() {
        return this._items.length
    }

    clear() {
        this._items = []
    }
}

const pilha = new Stack(); //criando um objeto do tipo pilha
pilha.push(1)
pilha.push(2)
pilha.push(3)
console.log(pilha.isEmpty())
console.log(pilha.size())
console.log(pilha.peek())
console.log(pilha.pop())
console.log(pilha.pop())
console.log(pilha.pop())
console.log(pilha.isEmpty())
console.log(pilha.size())