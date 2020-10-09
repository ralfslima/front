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
    .then(dadosDoJson => res.render('pagina', {vetor:dadosDoJson}))
});

app.post('/pesquisar', (req, res) =>{
    // Obter dados
    let banda = req.body.banda;
    let musica = req.body.musica;

    // Obter todas as músicas
    fetch('http://localhost:3000/musicas', {method:"GET"})
    .then(retorno => retorno.json())
    .then(retorno => {
        for(let i=0; i<retorno.length; i++){
            if(retorno[i].banda == banda && retorno[i].musica == musica){
                return retorno[i];
            }
        }
    })
    .then(r => {
        if(r == undefined){
            res.render('letra', {naoEncontrado:true});
        }else{
            res.render('letra', {vetor:r, encontrado:true});
        }
    })

})

// Servidor
app.listen(8080);