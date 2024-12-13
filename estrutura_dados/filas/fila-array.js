class Queue {
    constructor() {
        this._items = [];
    }

    enqueue(element) {
        this._items.push(element);
    }

    dequeue() {
        return this._items.shift();
    }

    nextElement() {
        return this._items[this._items.length - 1];
    }

    isEmpty() {
        return this._items.length === 0;
    }

    size() {
        return this._items.length
    }

    clear() {
        this._items = [];
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = `${this._items}`
        for (let i = 1; i < this._count; i++) {
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





