// let x = {} - objeto
//let pessoa = {nome: 'Thiago', sobrenome: 'Salvá', idade: 36}

let pessoa = {
    nome: 'Maurício',
    sobrenome: 'Nadal',
    idade: 18
}
if (pessoa.idade >= 18) {
    console.log(`Parabéns! ${pessoa.nome} você pode tirar a cnh`)
}
// else console.log(`${pessoa.nome} você não tem idade para tirar a cnh`)


for (let propriedade in pessoa) {     //acessar o objeto
    console.log(propriedade, pessoa[propriedade])
}

//[] - vetor

//crie 3 var
//a)media dos alunos
//b)quantos acima da media
//c)nome do aluno com a maior media

let pessoa1 = { nome: 'Cláudio', media: 8 }
let pessoa2 = { nome: 'Ana', media: 4 }
let pessoa3 = { nome: 'José', media: 7 }

//a
console.log((pessoa1.media + pessoa2.media + pessoa3.media) / 3)

//b
if (pessoa1.media >= 7 && pessoa2.media >= 7 && pessoa3.media >= 7) {
    console.log('3 alunos acima da média')
} else if (pessoa1.media >= 7 && pessoa2.media >= 7 || pessoa3.media >= 7) {
    console.log('2 alunos acima da média')
} else console.log('1 aluno acima da média')

// let quantidade = 0 
// if(pessoa1.media > media) quantidade++
// if(pessoa2.media > media) quantidade++
// if(pessoa3.media > media) quantidade++
// console.log(`${quantidade} estão acima da média`)

//c
if (pessoa1.media > pessoa2.media && pessoa1.media > pessoa3.media) {
    console.log(`${pessoa1.nome} tem a maior média`)
} else if (pessoa2.media > pessoa1.media && pessoa2.media > pessoa3.media) {
    console.log(`${pessoa2.nome} tem a maior média`)
} else console.log(`${pessoa3.nome} tem a maior média`)

// faca um algorirtmo q calcule o mdc entre dois n qualquer

let x = 15, y = 10

while (y !== 0) {
    y = x % (x = y);
}
let mdc = x
console.log(`o mdc é ${mdc}`)

//faça o algoritmo q calcule o fatorial de um n 

let numero = 5;
let resultado = 1;
let i = 1;

while (i <= numero) {
    resultado *= i;
    i++;
}

console.log("O fatorial de", numero, "é", resultado);

//faca um algoritmo que encontre o n primo imediatamente maior q o numero da variavel n

let z = 50
let contador
do {
    z++
    contador = 0
    for (let i = 1; i <= z; i++) {
        if (z % i === 0) contador++
    }
} while (contador !== 2)
console.log(z)

//faca um algoritmo que diga qual o numero primo mais próximo da variavel n

do {
    z--
    contador = 0
    for (let i = 1; i <= z; i++) {
        if (z % i === 0) contador++
    }
} while (contador !== 2) {
    let menorP = z
    if (menorP - x > x - menorP) {
        console.log(z)
    }
}