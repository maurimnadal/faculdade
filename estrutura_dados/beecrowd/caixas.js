var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Função para processar cada caso de teste
while (true) {
    let [N, P] = lines.shift().split(' ').map(Number); // N: número de caixas, P: número de pilhas
    
    // Se N e P forem zero, significa fim da entrada
    if (N === 0 && P === 0) break;
    
    // Inicializa as pilhas
    let pilhas = [];
    
    // Lê as pilhas e armazena
    for (let i = 0; i < P; i++) {
        let pilha = lines.shift().split(' ').map(Number);
        pilhas.push(pilha.slice(1)); // Descartando o primeiro número que indica a quantidade de caixas
    }
    
    // Encontre a pilha e a posição da caixa 1
    let caixa1Pos = null;
    for (let i = 0; i < P; i++) {
        let pilha = pilhas[i];
        if (pilha.includes(1)) {
            caixa1Pos = { pilhaIndex: i, caixaIndex: pilha.indexOf(1) };
            break;
        }
    }
    
    // Verifique quantas caixas estão em cima da caixa 1
    let caixasParaRetirar = caixa1Pos.caixaIndex; // Caixas em cima da caixa 1 na mesma pilha
    
    // Agora precisamos garantir que ao menos um dos lados da caixa 1 esteja livre
    let pilhaEsquerdaLivre = caixa1Pos.pilhaIndex === 0; // Se estiver na primeira pilha, não precisa tirar nada à esquerda
    let pilhaDireitaLivre = caixa1Pos.pilhaIndex === P - 1; // Se estiver na última pilha, não precisa tirar nada à direita
    
    // Se a pilha não está na extremidade (nem à esquerda nem à direita), precisamos remover uma caixa de uma pilha adjacente
    if (!pilhaEsquerdaLivre && !pilhaDireitaLivre) {
        // A caixa 1 não está na extremidade, então, vamos remover uma caixa de uma pilha adjacente
        caixasParaRetirar++;
    }

    // Exibe o número mínimo de caixas a serem removidas, sem contar a caixa 1
    console.log(caixasParaRetirar);
}