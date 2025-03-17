const { getAlunos, createAluno, updateAluno, deleteAluno} =
    require('./controllers/alunosController');
function handleRequest(req, res) {

    res.setHeader('Content-Type', 'application/json');
    const routeKey = `${req.method} ${req.url}`;
    switch (true) {
        case routeKey === 'GET /api/alunos':
            getAlunos(req, res); // Listar produtos
            break;
        case routeKey === 'POST /api/alunos':
            createAluno(req, res); // Criar produto
            break;
        case req.url.startsWith('/api/alunos/{id}') && req.method === 'PUT':
            updateAluno(req, res); // Atualizar produto
            break;
        case req.url.startsWith('/api/alunos/:id') && req.method === 'DELETE':
            deleteAluno(req, res); // Deletar produto
            break;
        default:
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Rota não encontrada' })); // Responde com 404 para rotas não encontradas
            break;
    }
}
module.exports = { handleRequest };