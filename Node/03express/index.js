// Importar express
let express = require('express');

// Criar variável com as funcionalidades do express
let app = express();

// Rota
app.get('/', (req, res) => {
    res.send("<h1>Aprendendo Node.js</h1>");
});

app.get('/sobre/:nome/:idade', (req, res) => {
    res.send("<h1>Olá "+ req.params.nome + " você tem "+ req.params.idade + " anos.</h1>");
});

// Servidor
app.listen(8080);