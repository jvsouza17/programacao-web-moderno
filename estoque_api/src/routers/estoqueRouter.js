const express = require('express')
const router = express.Router();
const estoqueCtrl = require('../controllers/estoqueCtrl.js')


router.get('/api/produtos', estoqueCtrl.getProdutos)
router.post('/api/produto/cadastrar', estoqueCtrl.cadastrarProduto)

module.exports = router;