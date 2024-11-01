const Node = require('./node');

class LinkedList {
    constructor() {
        this._count = 0;
        this._head = undefined;
    }

    push(element) {
        const node = new Node(element);
        if (this._head == null) {
            this._head = node;
        } else {
            let current = this._head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        this._count++;
    }

    removeAt(index) {
        if (index >= 0 && index < this._count) {
            let current = this._head;
            if (index === 0) {
                this._head = current.next;
            } else {
                let previous;
                for (let i = 0; i < index; i++) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this._count--;
            return current.element;
        }
        return undefined;
    }

    getElementAt(index) {
        if (index >= 0 && index < this._count) {
            let node = this._head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
        return undefined;
    }

    insert(element, index) {
        if (index >= 0 && index <= this._count) {
            const node = new Node(element);
            if (index === 0) {
                const current = this._head;
                node.next = current;
                this._head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this._count++;
            return true;
        }
        return false;
    }

    indexOf(element) {
        let current = this._head;
        for (let i = 0; i < this._count && current != null; i++) {
            if (element === current.element) {
                return i;
            }
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        const index = this.indexOf(element);
        return this.removeAt(index);
    }

    size() {
        return this._count;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getHead() {
        return this._head;
    }

    toString() {
        if (this._head == null) {
            return '';
        }
        let objString = `${this._head.element}`;
        let current = this._head.next;
        while (current != null) {
            objString += `,${current.element}`;
            current = current.next;
        }
        return objString;
    }
}


let listaligada = new LinkedList();
listaligada.push("Ronaldo");
listaligada.push("Carol")
listaligada.insert("Betty", 2);
listaligada.insert("Marina", 0);
console.log(listaligada.toString());
console.log(listaligada.size());
console.log(listaligada.removeAt(2));
console.log(listaligada.toString());
console.log(listaligada.removeAt(0));
console.log(listaligada.getHead());
console.log(listaligada.removeAt(1));
console.log(listaligada.indexOf("Betty"));
console.log(listaligada.toString());