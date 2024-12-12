const DoublyLinkedList = require('./DoublyLinkedList');

class Trajeto {
    constructor(origem, destino, distancia, tempo) {
        this.origem = origem;
        this.destino = destino;
        this.distancia = distancia; 
        this.tempo = tempo;         
    }
}


const trajetos = new DoublyLinkedList();


trajetos.push(new Trajeto("Loja A", "Loja B", 15, 30));
trajetos.push(new Trajeto("Loja B", "Loja C", 20, 40));
trajetos.push(new Trajeto("Loja C", "Loja D", 25, 50));
trajetos.push(new Trajeto("Loja D", "Loja E", 10, 20));


function calcularTotais(lista) {
    let distanciaTotal = 0;
    let tempoTotal = 0;
    
    let currentNode = lista._head;

    while (currentNode) {
        const trajeto = currentNode.getElement();
        distanciaTotal += trajeto.distancia;
        tempoTotal += trajeto.tempo;
        currentNode = currentNode.getNext();
    }

    return { distanciaTotal, tempoTotal };
}


const { distanciaTotal, tempoTotal } = calcularTotais(trajetos);



console.log(`Distância total percorrida: ${distanciaTotal} km`);
console.log(`Tempo total gasto: ${tempoTotal} minutos`);



