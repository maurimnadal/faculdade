class Queue {
    constructor() {
        this._items = [];
    }

    enqueue(element) {
        this._items.unshift(element);
    }

    dequeue() {
        return this._items.pop();
    }

    nextElement() {
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length === 0;
    }

    toString(){
        if(this.isEmpty()){
            return  ''
        }
        let objString = `último - ${this._items} - primeiro`
        for(let i = 1; i < this._count; i++){
            objString = `${objString}, ${this._items[i]}`
        }
        return objString
    }
}

const fila = new Queue();

fila.enqueue(1)
fila.enqueue(2)
console.log(fila.isEmpty())
fila.enqueue(3)
console.log(fila.nextElement())
console.log(fila.toString())
console.log(fila.dequeue())
console.log(fila.dequeue())
console.log(fila.dequeue())
console.log(fila.isEmpty())





