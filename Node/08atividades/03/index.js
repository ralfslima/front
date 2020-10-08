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
let contas = [];

// Rotas
app.get('/', (req, res) => {
    // Redirecionamento
    res.render('formulario', {'contas':contas});
});

app.post('/cadastrar', (req, res) => {
    // Obter dados
    let conta = req.body.conta;
    let valor = parseFloat(req.body.valor);
    let data = req.body.data;

    // Adicionar no JSON
    contas.push({'conta':conta, 'valor':valor, 'data':data});
    
    // Redirecionamento
    res.render('formulario', {'contas':contas, 'cadastro':true});
});

app.post('/filtrar', (req, res) => {
    // Obter a opção de filtragem
    let opcao = parseInt(req.body.filtro);

    // Condicional
    if(opcao == 1){

        for(let i=0; i<contas.length - 1; i++){
            for(let i2= i+1; i2<contas.length; i2++){

                if(contas[i2].valor < contas[i].valor){
                    let obj = contas[i];
                    console.log(obj);
                    contas[i] = contas[i2];
                    contas[i2] = obj;
                }

            }
        }
        res.render('formulario', {'contas':contas, 'cadastro':true});
    }

    if(opcao == 2){

        for(let i=0; i<contas.length - 1; i++){
            for(let i2= i+1; i2<contas.length; i2++){

                if(contas[i2].valor > contas[i].valor){
                    let obj = contas[i];
                    console.log(obj);
                    contas[i] = contas[i2];
                    contas[i2] = obj;
                }

            }
        }
        res.render('formulario', {'contas':contas, 'cadastro':true});
    }


});

// Servidor
app.listen(8080);