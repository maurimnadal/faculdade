//lista 
//1
const vetor = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = vetor[i] * 2
}
console.log(vetor)

//2
const maior = vetor.filter((valor) => valor > 10)
console.log(maior)

//3
const pessoas = [
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Carlos",
        idade: 15,
    },
    {
        nome: "Maria",
        idade: 22,
    }
];

const maior_18 = pessoas.find(pessoa => pessoa.idade > 18)
console.log(maior_18)

//4
const soma = vetor.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(soma)

//5
const maior_10 = vetor.some((valor) => valor > 10)
console.log(maior_10)

//6
const positivos = vetor.every((valor) => valor >= 0)
console.log(positivos)

//7
const strings = ["batata", "polenta", "oi"]
let novasStrings = strings.filter(strings => strings.length > 3).map(strings => strings.toUpperCase())
console.log(novasStrings)

//8
const produtos = [
    { nome: "Produto A", preco: 10.99, quantidade: 3 },
    { nome: "Produto B", preco: 25.50, quantidade: 5 },
    { nome: "Produto C", preco: 7.75, quantidade: 10 },
    { nome: "Produto D", preco: 100.00, quantidade: 2 },
    { nome: "Produto E", preco: 50.25, quantidade: 1 }
];

//9
const sla = vetor.every(valor => valor % 2 === 0)
console.log(sla)

const impar = vetor.some(valor => valor % 2 === 1)
console.log(impar)

//10
const batata = vetor.filter(valor => valor % 2 === 0).reduce((acumulador, valor) => acumulador + valor, 0)
console.log(batata/vetor.length)

a = [1, 2, 4, 10]
const batata1 = a.filter(valor => valor % 2 === 0)
console.log(batata1)
const batata2 = batata1.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(batata2 / batata1.length)