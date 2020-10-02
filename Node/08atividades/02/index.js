// Importar express
let express = require('express');

// Importar o express-handlebars
let handlebars = require('express-handlebars');

// App
let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Template
app.engine('handlebars', handlebars({defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// JSON
let alunos = [];

// Rotas
app.get('/', (req, res) => {
    // Redirecionamento
    res.render('formulario', {'alunos':alunos});
});

app.post('/cadastrar', (req, res) => {
    // Obter dados
    let nome = req.body.nome;
    let nota1 = parseFloat(req.body.nota1);
    let nota2 = parseFloat(req.body.nota2);

    // Média
    let media = (nota1 + nota2) / 2;

    // Situação
    let situacao = media >= 7 ? "Aprovado": "Reprovado";

    // Adicionar no JSON
    alunos.push({'nome':nome, 'nota1':nota1, 'nota2':nota2, 'media':media, 'situacao':situacao});
    
    // Redirecionamento
    res.render('formulario', {'alunos':alunos, 'cadastro':true});
});

app.get('/remover/:codigo', (req, res) => {
    // Remover
    alunos.splice(req.params.codigo, 1);

    // Redirecionamento
    res.render('formulario', {'alunos':alunos, 'exclusao':true});
});


// Servidor
app.listen(8080);