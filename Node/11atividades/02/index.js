/*
    express: npm i express
    express-handlebars: npm i express-handlebars
    body-parser: npm i body-parser
    node-fetch: npm i node-fetch
*/

// Express
let express = require('express');

// Express-handlebars
let handlebars = require('express-handlebars');

// Body-parser
let bodyParser = require('body-parser');

// Node-fetch
let fetch = require('node-fetch');

// App
let app = express();

// Template
app.engine('handlebars', handlebars({defaultLayout: 'principal'}))
app.set('view engine', 'handlebars');

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// Especificar local com arquivos - CSS, JS e Imagens
app.use(express.static(__dirname + '/publico'));

// Rotas
app.get('/', (req, res) =>{
    // Obter dados da API
    fetch('http://localhost:3000/receitas', {method:"GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('pagina', {vetor:dadosDoJson}));
});

app.get('/descricao/:codigo', (req, res) =>{
    // Obter dados da API
    fetch('http://localhost:3000/receitas/'+req.params.codigo, {method:"GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('receita', {vetor:dadosDoJson}));
})

app.post('/cadastrar', (req, res) =>{
    // Obter nome e idade
    let nome = req.body.nome;
    let idade = req.body.idade;

    // JSON para efetuar o cadastro
    let dados = {"nome":nome, "idade":idade};

    // Enviar para a API
    fetch('http://localhost:3000/receitas',{
        method:'POST',
        body:JSON.stringify(dados),
        headers:{'Content-Type':'application/json'}
    })
    .then(res.redirect('/'));
});


// Servidor
app.listen(8080);