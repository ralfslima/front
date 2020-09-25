// Importar módulo HTTP
let http = require('http');

// Servidor
http.createServer((req, res) => {
    res.end('<h1>Aprendendo Node.js na Apex</h1>');
}).listen(8080);