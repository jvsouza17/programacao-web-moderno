const express = require('express');
const router = express.Router();

const estoqueViewCtrl = require('../controllers/estoqueViewCtrl');

router.get('/produtos', estoqueViewCtrl.getViewProdutos);
router.get('/produto/cadastrar', estoqueViewCtrl.getViewCadastrar);
router.post('/produto/cadastrar', estoqueViewCtrl.cadastrarProduto);

module.exports = router;