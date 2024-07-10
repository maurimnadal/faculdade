console.log('Olá Mundo!')

// Comentário de linha
/*Comentário de bloco
*
*/

//Tipos de dados
/**
 * inteiro(int)
 * real(float)
 * text(string)
 * lógico(boolean) TRUE / FALSE
 * não definido(undefined)
 * nulo(null)
*/

//CRIAR VARIÁVEIS
//É necessário criar um identificador
/**
 * var: var idade, nome
 * let: let idade, nome
 * const: const idade, nome
 * para criar váriaveis nós vamos colocar (let / const)
 * seguido do nome da váriavel
*/

let nome = ""

//Atribuição de váriaveis 
/**
 * é necessário utilizar o operador '='seguido do valor desejado
 * ex: let idade = 22;
*/

let idade = 22

//Como escolher um nome de váriavel
/*
 *não posso utilizar 'espaço'
 *não posso começar com números
 *não pode conter caracteres especiais
 *sensível ao  nome da váriavel
*/

let nome1 = "Maurício"

//EXPRESSÕES

//Aritméticas
/**
 * o resultado é um valor numérico
 * operadores aritméticos: +, -, *, /, %
 */

let soma1 = 4 + 6
let soma2 = 3 * 2
let soma3 = 6 / 2
let soma4 = 8 % 3
let soma5 = 7 - 5

//Lógicas
//operadores relacionais
/**
 * relação entre dois valores
 * EX: >, <, >=, <=, ==, !=, ===, !==
*/

let r1 = 5 > 5
let r2 = 5 < 5
let r3 = 5 >= 5
let r4 = 5 <= 5
let r5 = 5 == 5
let r6 = 5 != 5
let r7 = 5 === 5
let r8 = 5 !== 5

/**
 * let r51 = 5 == 5    V
 * let r52 = 5 == "5"  V
 * 
 * let r53 = 5 === 5   V
 * let r54 = 5 === "5" F
 */

let outra = 0 == false

 //operadores lógicos
 /**
  * E: &&
  * OU: ||
  * NÃO: !
  */

 //Concatenação
/** 
 * "5" + "5" = "55"
 * 5 + "5" = "55"
 * 5 + 3 = 8
*/

/**
 * Exemplo
 * 
 * let A = 2, B = 7, C = 3.5
 * let L = false
 * 
 * let resultado = B == A * C && (L || true)
 *               = B == A * C &&   TRUE
 *               = 7 == 7 && TRUE
 *               = TRUE && TRUE
 *               = TRUE
 */

/**let a = 2, b = 7, c = 3.5
  let R = false && b/a >= c || !(a <= c)
    = false && b/a >=c  ||  false
    = false &&  true || false
    =  false || false
    = false
*/