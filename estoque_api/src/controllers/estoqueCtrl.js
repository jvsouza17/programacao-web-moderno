const Produto = require('../models/produto.js')

async function getProdutos(req, res){
    let produtos = await Produto.findAll();
    res.send(produtos);
};

async function getProdutoId(req, res){
    let id = req.params.id;
    console.log(id)
    let produto = await Produto.findByPk(id);
    res.send(produto);
}

function cadastrarProduto(req, res){
    let produto = {
        id: req.body.id,
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
};

async function updateProduto(req, res){

    await Produto.update(
        {nome: req.body.nome,
        quantidade: req.body.quantidade},
        
        {where : {
            id: req.body.id,
            },
        },
    )
    .then(()=>{
        res.send("Alteração realizada com sucesso! ")})
    .catch((err)=>{
        console.log(err)})
        res.send(false);
};

async function deleteProduto(req, res){
    try {
        const { id } = req.body;

        let produto = await Produto.findByPk(id);

        if (produto) {
            await produto.destroy();
            res.send(true);
        } else {
            res.status(404).send(false);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(false);
    }
}

module.exports = {
    getProdutos,
    cadastrarProduto,
    getProdutoId,
    updateProduto,
    deleteProduto,
}