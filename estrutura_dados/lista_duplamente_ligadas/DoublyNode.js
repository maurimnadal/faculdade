class DoublyNode {
    constructor(previous, next, element) {
        this._previous = previous;  
        this._next = next;          
        this._element = element;        
    }

    setNext(node) {
        this._next = node;
    }

    getNext() {
        return this._next;
    }

    setPrevious(node) {
        this._previous = node;
    }

    getPrevious() {
        return this._previous;
    }

    getElement() {
        return this._element;
    }
}

module.exports = DoublyNode;