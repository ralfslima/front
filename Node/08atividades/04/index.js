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
let pessoas = [];

// Rotas
app.get('/', (req, res) => {
    // Redirecionamento
    res.render('formulario', {'pessoas':pessoas});
});

app.post('/cadastrar', (req, res) => {
    // Obter dados
    let nome = req.body.nome;
    let peso = parseFloat(req.body.peso);
    let altura = parseFloat(req.body.altura);

    // Média
    let calculo = peso / (altura * altura);

    // Situação
    let situacao;
    if(calculo <= 18.5){
        situacao = "Muito abaixo do peso";
    }else if(calculo <= 25){
        situacao = "Peso normal";
    }else if(calculo <= 30){
        situacao = "Acima do peso";
    }else{
        situacao = "Obesidade";
    }

    // Adicionar no JSON
    pessoas.push({'nome':nome, 'peso':peso, 'altura':altura, 'calculo':calculo, 'situacao':situacao});
    
    // Redirecionamento
    res.render('formulario', {'pessoas':pessoas, 'cadastro':true});
});


// Servidor
app.listen(8080);