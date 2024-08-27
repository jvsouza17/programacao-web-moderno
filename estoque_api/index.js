const express = require('express');
const app = express();
const db = require('./src/db.js');
const PORT = 8080;
const estoqueRouter = require('./src/routers/estoqueRouter.js');
const estoqueViewRouter = require('./src/routers/estoqueViewRouter.js');
const mustacheExpress = require('mustache-express');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/src/views');

app.listen(PORT, ()=>{
    console.log("A aplicação está rodando na porta " + PORT);
});

db.sync()
.then(()=>{
    console.log("Banco de dados conectado!");
})
.catch((err)=>{
    console.error("Falha na conexão ao banco de dados", err);
})

app.use('/', estoqueRouter, estoqueViewRouter);