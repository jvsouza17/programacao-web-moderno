const Produto = require('../models/produto');

async function getViewProdutos(req, res){
    let produtos = await Produto.findAll();
    res.render("produtos.html", {produtos});
}

function getViewCadastrar(req, res) {
    res.render("cadastrarProduto.html");
}

function cadastrarProduto(req, res){
    let produto = {
        id: req.body.id,
        nome: req.body.nome,
        quantidade: req.body.quantidade
    };
    Produto.create(produto)
    .then(()=>{
        res.redirect('/produto/cadastrar?status=true');  
    })
    .catch((err)=>{
        console.log(err)
        res.redirect('/produto/cadastrar?status=false');  
    })
};

module.exports = {
    getViewProdutos,
    getViewCadastrar,
    cadastrarProduto,
}