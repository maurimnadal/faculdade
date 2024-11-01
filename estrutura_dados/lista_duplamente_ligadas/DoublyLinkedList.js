const DoublyNode = require('./DoublyNode');

class DoublyLinkedList {
    constructor() {
        this._head = undefined;
        this._last = undefined;
        this._length = 0;
    }

    addAtBeginning(element) {
        const newNode = new DoublyNode(undefined, this._head, element);
        if (this._head) {
            this._head.setPrevious(newNode);
        }
        this._head = newNode;

        if (this._length === 0) {
            this._last = newNode;
        }

        this._length++;
    }

    addAtEnd(element) {
        const newNode = new DoublyNode(this._last, undefined, element);
        if (this._last) {
            this._last.setNext(newNode);
        }
        this._last = newNode;

        if (this._length === 0) {
            this._head = newNode;
        }

        this._length++;
    }

    push(element) {
        this.addAtEnd(element);
    }

    insert(element, position) {
        if (position < 0 || position > this._length) {
            return; // Não insere se a posição for inválida
        }
        if (position === 0) {
            this.addAtBeginning(element);
        } else if (position === this._length) {
            this.addAtEnd(element);
        } else {
            let currentNode = this._head;
            for (let i = 0; i < position; i++) {
                currentNode = currentNode.getNext();
            }
            const newNode = new DoublyNode(currentNode.getPrevious(), currentNode, element);
            currentNode.getPrevious().setNext(newNode);
            currentNode.setPrevious(newNode);
            this._length++;
        }
    }

    getElementAt(index) {
        if (index < 0 || index >= this._length) {
            return undefined; // Índice fora dos limites
        }
        let currentNode = this._head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.getNext();
        }
        return currentNode.getElement();
    }

    remove(element) {
        let currentNode = this._head;
        while (currentNode) {
            if (currentNode.getElement() === element) {
                this.removeNode(currentNode);
                return true; // Retorna verdadeiro se o elemento foi removido
            }
            currentNode = currentNode.getNext();
        }
        return false; // Retorna falso se o elemento não foi encontrado
    }

    removeNode(node) {
        if (node.getPrevious()) {
            node.getPrevious().setNext(node.getNext());
        } else {
            this._head = node.getNext(); // O nó é o primeiro
        }
        if (node.getNext()) {
            node.getNext().setPrevious(node.getPrevious());
        } else {
            this._last = node.getPrevious(); // O nó é o último
        }
        this._length--;
    }

    indexOf(element) {
        let currentNode = this._head;
        for (let i = 0; i < this._length; i++) {
            if (currentNode.getElement() === element) {
                return i; // Retorna o índice do elemento
            }
            currentNode = currentNode.getNext();
        }
        return -1; // Retorna -1 se o elemento não foi encontrado
    }

    removeAt(position) {
        if (position < 0 || position >= this._length) {
            return undefined; // Posição inválida
        }
        let currentNode = this._head;
        for (let i = 0; i < position; i++) {
            currentNode = currentNode.getNext();
        }
        this.removeNode(currentNode);
        return currentNode.getElement(); // Retorna o elemento removido
    }

    isEmpty() {
        return this._length === 0; // Retorna verdadeiro se a lista estiver vazia
    }

    size() {
        return this._length; // Retorna o tamanho da lista
    }

    toString() {
        if (this._length === 0) {
            return "[]";
        }

        let str = "[";
        let node = this._head;

        while (node) {
            str += node.getElement();
            if (node.getNext()) {
                str += ", ";
            }
            node = node.getNext();
        }

        str += "]";
        return str;
    }
}

module.exports = DoublyLinkedList;