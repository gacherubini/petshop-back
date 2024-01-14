const express = require('express');
const router = express.Router();
const cors = require('cors');
const { RegistroDeProduto, ListarTodosProdutos, ListarProdutosPorID, AtualizarProdutosPorID, DeletarProdutosPorID } = require('../controllers/ProductRoutes');

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);


router.post('/', RegistroDeProduto);
router.get('/', ListarTodosProdutos);
router.get('/id', ListarProdutosPorID);
router.patch('/id', AtualizarProdutosPorID);
router.delete('/id', DeletarProdutosPorID);

module.exports = router;
