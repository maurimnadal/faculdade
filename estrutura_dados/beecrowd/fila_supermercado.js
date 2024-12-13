var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [N, M] = lines[0].split(' ').map(Number); // N funcionários, M clientes
const funcionarios = lines[1].split(' ').map(Number); // Tempos por item (v_i)
const clientes = lines[2].split(' ').map(Number); // Itens por cliente (c_j)

// Criar uma fila prioritária (min-heap) para os funcionários
const heap = [];

// Inicializar heap com cada funcionário (tempo inicial 0)
for (let i = 0; i < N; i++) {
    heap.push({ id: i + 1, tempoLivre: 0, tempoPorItem: funcionarios[i] });
}

// Função para organizar o heap (baseado no tempoLivre, e depois pelo id)
heap.sort((a, b) => a.tempoLivre === b.tempoLivre ? a.id - b.id : a.tempoLivre - b.tempoLivre);

// Processar cada cliente
for (let i = 0; i < M; i++) {
    // Pegar o funcionário com menor tempoLivre
    const funcionario = heap.shift();

    // Calcular novo tempo livre
    funcionario.tempoLivre += funcionario.tempoPorItem * clientes[i];

    // Reinserir o funcionário no heap
    heap.push(funcionario);

    // Reorganizar o heap
    heap.sort((a, b) => a.tempoLivre === b.tempoLivre ? a.id - b.id : a.tempoLivre - b.tempoLivre);
}

// O tempo total é o maior tempoLivre no heap
const tempoTotal = Math.max(...heap.map(f => f.tempoLivre));
console.log(tempoTotal);