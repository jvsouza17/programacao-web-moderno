const express = require('express');
const app = express();
const db = require('./src/db.js');
const PORT = 8080;
const estoqueRouter = require('./src/routers/estoqueRouter');
const bodyParser = require('body-parser')

app.use(express.urlencoded({extended: true}))

app.listen(PORT, ()=>{
    console.log("A aplicação está rodando na porta " + PORT);
});

db.sync()
.then(()=>{
    console.log("Banco de dados conectado!")
})
.catch((err)=>{
    console.error("Falha na conexão ao banco de dados", err)
})

app.use('/', estoqueRouter);