const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/celsius-fahrenheit') {
        const celsius = parseFloat(parsedUrl.query.celsius);

        if (isNaN(celsius)) {
            res.writeHead(400, { 'Content-Type': 'application/json' }); 
            res.end(JSON.stringify({ erro: 'Parâmetros inválidos' }));
            return;
        }
        const fahrenheit = (celsius * 9 / 5) + 32;
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ celsius, fahrenheit }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada');
    }
});
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})