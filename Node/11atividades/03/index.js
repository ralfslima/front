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
    fetch('http://localhost:3000/musicas', {method:"GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('pagina', {vetor:dadosDoJson}));
});

app.get('/descricao/:codigo', (req, res) =>{
    // Obter dados da API
    fetch('http://localhost:3000/musicas/'+req.params.codigo, {method:"GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('letra', {vetor:dadosDoJson}));
})

app.post('/cadastrar', (req, res) =>{
    // Obter dados
    let banda = req.body.banda;
    let musica = req.body.musica;
    let letra = req.body.letra;

    // JSON para efetuar o cadastro
    let dados = {
        "banda":banda,
        "musica":musica,
        "letra":letra
    };

    // Enviar para a API
    fetch('http://localhost:3000/musicas',{
        method:'POST',
        body:JSON.stringify(dados),
        headers:{'Content-Type':'application/json'}
    })
    .then(res.redirect('/'));
});


// Servidor
app.listen(8080);