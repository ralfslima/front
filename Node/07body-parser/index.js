// Importar express
let express = require('express');

// Importar o handlebars
let handlebars = require('express-handlebars');

// Importar body-parser
let bodyParser = require('body-parser');

// App
let app = express();

// Template
app.engine('handlebars', handlebars({defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// JSON de usuários
let usuarios = [];

// Rotas
app.get('/', (req, res) => {
    res.render('formulario');
});

app.post('/cadastrar', (req, res) => {
    usuarios.push({"nome" : req.body.usuario});
    res.render('formulario', {'cadastro':true, 'usuarios':usuarios});
}); 

app.get('/remover/:id', (req, res) => {
    usuarios.splice(req.params.id, 1);
    res.render('formulario', {'removido':true, 'usuarios':usuarios});
});


// Servidor
app.listen(8080);