const express = require('express');
const app = express();
const PORT = 8080;
const indexRouter = require('./src/routers/indexRouter.js');
const indexView = require('./src/controllers/indexController.js');

app.use('/', indexRouter);

app.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}`);
})
