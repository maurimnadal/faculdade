// //vetores
// const vetor = [1, 2, 3, 4, 5];

// //como acessar determnada posição
// //console.log(vetor[4]);

// //como definir um valor para um determinado índice da variável

// vetor[1] = 7;

// //percorrer todo o vetor
// let i = 0;
// while (i < vetor.length) {
//   //console.log(vetor[i]);
//   i++;
// }

// i = 0;
// do {
//   //console.log(vetor[i]);
//   i++;
// } while (i < vetor.length);

// for (let i = 0; i < vetor.length; i++) {
//   //console.log(vetor[i]);
// }

// //como inicializarum vetor a partir de uma estrutura de repetição
// for(let i = 0; i < 10; i++){
//     vetor[i] = i
// }
// // console.log(vetor)

// //como iniciar um vetor com valores do maior indice para o menor indice
// for(let i = 0; i <vetor.length; i++){
//     vetor[i] = vetor.length - i - 1
// }
// // console.log(vetor)

// //exercicios
// //1)faça um script que mostre o somatorio de todos os numeros do vetor

// //let soma = 0
// // for(i = 0; i < vetor.length; i++){
// //     soma += vetor[i]
// // }
// // console.log(soma)

// //criar vetores aleatorios
// const vetor1 = []

// for (let i = 0; i < 15; i++){
//     vetor1[i] = Math.round(Math.random() * 100)  //round arredonda pro mais proximo  // ceil arredonda pra cima
// }
// console.log(vetor1)

// //media de todos os nunmeros
// let soma = 0

// for(let i = 0; i < vetor1.length; i++){
//     soma += vetor1[i]
// }
// const media = soma / vetor1.length
// console.log(media)

// //conta quantos numero sao acima da media
// let contador = 0

// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] > media){
//         contador++
//     }
// }
// console.log(contador)

// //quantos numeros sao pares
// contador = 0
// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] % 2 === 0){
//         contador++
//     }
// }
// console.log(contador)

// //encontre o maior numero do vetor
// let maior = Number.MIN_SAFE_INTEGER
// // let maior = vetor1[0]
// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] > maior){
//         maior = vetor1[i]
//     }
// }
// console.log(maior)

// //encontre o menor numero do vetor
// let menor = Number.MAX_SAFE_INTEGER
// // let menor = vetor1[0]
// for(let i = 0; i < vetor1.length; i++){
//     if(vetor1[i] < menor){
//         menor = vetor1[i]
//     }
// }
// console.log(menor)

//crie 2 vetores com tamanho 10
//crie um terceiro vetor com a soma de cada termo

let vetor1 = [];
for (let i = 0; i < 10; i++) {
  vetor1[i] = Math.round(Math.random() * 100);
}
console.log(vetor1);

let vetor2 = [];
for (let i = 0; i < 10; i++) {
  vetor2[i] = Math.round(Math.random() * 100);
}
console.log(vetor2);

let vetor3 = []
for(let i = 0; i < vetor1.length ; i++){
    vetor3[i] = vetor1[i] + vetor2[i]
}
console.log(vetor3)

//criar um terceiro vetor que cada indice é a soma na sequencia nos indices crescentes (0, 1,2,3) do vetor a com os indices decrecentes (9,8,7,6...) do vetor b
let vetor4 = []
for(let i = 0; i < vetor1.length ; i++){
    vetor4[i] = vetor1[i] + vetor2[vetor2.length - 1 - i]
}
console.log(vetor4)

//criar um novo vetor na ordem inversa do primeiro
let vetor5 = []
for(let i = 0; i < vetor1.length ; i++){
    vetor5[i] = vetor1[vetor1.length - 1 - i]
}
console.log(vetor5)

//faça a msm coisa que o ex anterior porem no msm vetor
for(let i = 0; i < vetor1.length / 2 ; i++){
    let x = vetor1[i]
    vetor1[i] = vetor1[vetor1.length - 1 - i ]
    vetor1[vetor1.length - 1 - i ] = x
}
console.log(vetor1)

//crie mais um vetor com apenas os numeros intersecao em a e b
let vetor6 = []
for(let i = 0; i < vetor1.length; i++){
    for(let j = 0; j < vetor2.length; j++){
        if(vetor1[i] === vetor2[j]){
            let k = 0
            while(k < vetor6.length){
                if(vetor1[i] === vetor6[k]) break;
                k++
            }
            if(k === vetor6.length) {
            vetor6[vetor6.length] = vetor1[i]
            break
            }
        }
    }
}
console.log(vetor6)

