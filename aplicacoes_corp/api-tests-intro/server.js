const http = require('http');
const app = require('./src/app');
const PORT = 3000;
// Cria o servidor usando o app do Express
const server = http.createServer(app);
// Inicia o servidor
server.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});