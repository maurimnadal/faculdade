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


const pilha = new Stack();

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {  
        pilha.push(array[i]);  
    } else {  
        if (pilha.isEmpty()) {
            console.log("A pilha está vazia");
        } else pilha.pop();     
    }
}


if (pilha.size() > 0) {
    console.log("Elementos restantes na pilha:");
    while (pilha.size() > 0) {
        console.log(pilha.pop());
    }
}