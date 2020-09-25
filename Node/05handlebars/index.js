// Importar express
let express = require('express');

// Importar o express-handlebars
let handlebars = require('express-handlebars');

// App
let app = express();

// Template
app.engine('handlebars', handlebars({defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
});

app.get('/contato', (req, res) => {
    res.render('contato');
});

// Servidor
app.listen(8080);
