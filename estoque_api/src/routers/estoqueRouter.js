const express = require('express');
const router = express.Router();
const estoqueCtrl = require('../controllers/estoqueCtrl.js');


router.get('/api/produtos', estoqueCtrl.getProdutos);
router.get('/api/produto/:id', estoqueCtrl.getProdutoId);
router.post('/api/produto/cadastrar', estoqueCtrl.cadastrarProduto);
router.post('/api/produto/atualizar', estoqueCtrl.updateProduto);
router.post('/api/produto/excluir', estoqueCtrl.deleteProduto);

module.exports = router;