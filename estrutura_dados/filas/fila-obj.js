class Queue {
    constructor() {
        this._count = 0;
        this._items = {};
    }

    enqueue(element) {
        this._items[this._count] = element
        this._count++
    }

    isEmpty() {
        return this._count === 0
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
        if(this.isEmpty()){
            return undefined
        }
        return this._items[0]
    }

    toString(){
        if(this.isEmpty()){
            return  ''
        }
        let objString = `primeiro - ${this._items[0]}`
        for(let i = 1; i < this._count; i++){
            objString = `${objString}, ${this._items[i]}`
        }
        return objString
    }
}

module.exports = Queue