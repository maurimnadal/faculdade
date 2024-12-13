class PriorityQueue {
    constructor() {
        this.items = [];
    }


    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;

        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }

        if (!added) {
            this.items.push(queueElement);
        }
    }


    dequeue() {
        if (this.isEmpty()) {
            throw new Error("A fila está vazia");
        }
        return this.items.shift(); 
    }


    peek() {
        if (this.isEmpty()) {
            throw new Error("A fila está vazia");
        }
        return this.items[0];
    }


    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.map(item => `${item.element} (prioridade: ${item.priority})`).join(", "));
    }
}


const priorityQueue = new PriorityQueue();


priorityQueue.enqueue("Tarefa 1", 3); // Prioridade baixa
priorityQueue.enqueue("Tarefa 2", 1); // Prioridade alta
priorityQueue.enqueue("Tarefa 3", 2); // Prioridade média


priorityQueue.print(); 


console.log(priorityQueue.dequeue()); 
priorityQueue.print(); 