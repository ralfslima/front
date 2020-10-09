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
    fetch('http://localhost:3000/produtos', {method:"GET"})
    .then(retorno => retorno.json())
    .then(dadosDoJson => res.render('pagina', {vetor:dadosDoJson}));
});

app.post('/cadastrar', (req, res) =>{
    // Obter nome do produto, marca e valor
    let nome = req.body.nome;
    let marca = req.body.marca;
    let valor = req.body.valor;

    // JSON para efetuar o cadastro
    let dados = {"nome":nome, "marca":marca, "valor":valor};

    // Enviar para a API
    fetch('http://localhost:3000/produtos',{
        method:'POST',
        body:JSON.stringify(dados),
        headers:{'Content-Type':'application/json'}
    })
    .then(res.redirect('/'));
});

app.get('/remover/:id', (req, res) => {

    // Obter o id
    let id = req.params.id;

    // Efetuar a exclusão através da API
    fetch('http://localhost:3000/produtos/'+id,{
        method:'DELETE',
        headers:{'Content-Type':'application/json'}
    })
    .then(res.redirect('/'));

});

// Servidor
app.listen(8080);
