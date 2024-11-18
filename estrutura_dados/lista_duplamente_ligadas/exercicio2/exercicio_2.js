const DoublyLinkedList = require('./DoublyLinkedList');


const carList = new DoublyLinkedList();


carList.addAtEnd("Uno Mille");


carList.addAtEnd("Corsa");


carList.insert("KA", 2);


carList.addAtBeginning("Gol");


console.log("Lista de Carros:", carList.toString());


console.log("Quantidade de Carros:", carList.size());


carList.removeAt(3);


console.log("Lista de Carros após remoção na posição 3:", carList.toString());


carList.removeAt(0);


console.log("Primeiro carro da lista:", carList.getElementAt(0));


carList.removeAt(carList.size() - 1);


const kaIndex = carList.indexOf("KA");
if (kaIndex !== -1) {
    const kaCar = carList.getElementAt(kaIndex);
    const previousCar = carList.getElementAt(kaIndex - 1);
    const nextCar = carList.getElementAt(kaIndex + 1);
    console.log(`Carro encontrado: ${kaCar}`);
    console.log(`Carro anterior: ${previousCar}`);
    console.log(`Próximo carro: ${nextCar}`);
} else {
    console.log("O carro 'KA' não foi encontrado na lista.");
}


console.log("Lista de Carros final:", carList.toString());