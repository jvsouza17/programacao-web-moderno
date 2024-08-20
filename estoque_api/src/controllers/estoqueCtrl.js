const Produto = require('../models/produto.js')

async function getProdutos(req, res){
    let produtos = await Produto.findAll();
    res.send(produtos)
};

function cadastrarProduto(req, res){
    let produto = {
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto)
    .then(()=>{
        res.send(produto);  
    })
    .catch((err)=>{
        console.error(err);
    })
    
}

module.exports = {
    getProdutos,
    cadastrarProduto
}