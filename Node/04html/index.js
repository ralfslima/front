// Importar Express
let express = require('express');

// App
let app = express();

// Rota
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pagina.html');
});

// Servidor
app.listen(8080);