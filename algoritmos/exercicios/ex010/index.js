//FUNÇÃO         RETORNO             SAÍDA
//map           //elemento          //vetor com msm tamanho
//find          //boolean           //elemento
//findindex     //boolean           //indice
//filter        //boolean           //vetor com no maior mesmo tamanho
//some          //boolean           //boolean
//every          //boolean           //boolean
//reduce        //elemento          //elemento

let vetor = [1, 2, 3, 4, 5, 6, 7, 8]
let vetor2 = []
for(let i = 0; i < vetor.length; i++){
    vetor2[i] = vetor[i] * 2
}
// console.log(vetor2)

const vetor3 = vetor.map(function(valor, indice, copia){
    return 3 * valor
})
// console.log(vetor3)

const vetor4 = vetor.map(function(valor, indice, copia){
    return "R$" + valor 
})
// console.log(vetor4)

const vetor5 = vetor.map(function(valor, indice, copia){
    if(indice % 2 === 0){
        return valor * 2
    } else return valor * 3
})
// console.log(vetor5)

const vetor6 = vetor.map((valor, indice) => valor * indice % 2 === 0 ? 2 : 3);

     
//chamada a função
// function oi(){
//     console.log("oi")
// }

// oi()

// function soma(x, y){
//     return x + y
// }

// function dobro(n){
//     return n * 2
// }

// let x = 5
// let y = 7

// // const resultado = soma(x, y)
// console.log(dobro(soma(x, y)))

//arrow function
const soma1 = (a, b) => {
    return a + b
}

const dobro1 = (n) => {
    return n * 2
}

const dobro3 = n => n * 2

function verificar_par(n){
    return n % 2 === 0      
}
//msm coisa 
const verificar_par1 = n => n % 2 === 0  

//find
const elemento = vetor.findIndex((valor) => valor === 5)
// console.log(elemento)

//filter
const pares = vetor.filter((valor) => valor % 2 === 0)
console.log(pares)

const vetor7 = vetor.map(() => 5)
console.log(vetor7)

const pares_dobro = vetor.filter((valor) => valor % 2 === 0).map(valor => valor * 2)
console.log(pares_dobro)

//some = ou logico - verifica se há pelo menos um valor par no vetor
const par = vetor.some((valor) => valor % 2 === 0)
console.log(par)

const impar = vetor.filter((valor) => valor % 2 === 1)
                    .some(valor => valor % 2 === 0)
console.log(impar)

//every - verifica se todos sao pares 
const todos_pares = vetor.filter((valor) => valor % 2 === 0).every(valor => valor % 2 === 0)
console.log(todos_pares)

//reduce

// let soma = 0
// for(let i = 0; i < vetor.length; i++){
//     soma += vetor[i]
// }
// console.log(soma)

const soma = vetor.reduce((acumulador, valor) => acumulador + valor, 0)
console.log(soma)

const produto = vetor.reduce((acumulador,valor) => acumulador * valor, 1)
console.log(produto)

const soma_quadrados = vetor.reduce((acumulador, valor) => acumulador + (valor **2), 0)
console.log(soma_quadrados)

const n_pares = vetor.reduce((a, v) =>{
    if(v % 2 === 0)
        a[a.length] = v 
    return a
}, [])
console.log(n_pares)
//msm coisa
const n_pares1 = vetor.reduce((a, v) => (v % 2 === 0) ? [...a, v] : a , [])
console.log(n_pares1)
