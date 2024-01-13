const router = require('express').Router()

const Produto = require('../models/Product')

// create dados
router.post('/', async (req, res)=>{

    //req.body
    const {name,description,price} = req.body

    if (!name) {
        res.status(422).json({error: 'o nome é obrigatorio'})
        return
    }

    const produto = {
        name,
        description,
        price,
    }

    try {
        // criando dados
        await Produto.create(produto)

        res.status(201).json({message: 'produto inserido no sistema com sucesso' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

// readt - leitura de dados
router.get('/', async(req,res)=>{
    try {

    const produto = await Produto.find()

    res.status(200).json(produto)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async(req,res)=>{
    
    //extrait dado da requisicao,pela url = req.params
    const id =req.params.id

    try {
        const produto = await Produto.findOne({_id: id})

        if (!produto) {
            res.status(422).json({message: 'A musica não foi encontrada'})
            return
        }

        res.status(200).json(produto)
    } catch (error) {
        res.status(500).json({error: error})
    }

})

//update - atualizacao de dados(PUT, PATCH)
router.patch('/:id', async(req,res) =>{

    const id = req.params.id

      //req.body
      const {name,description,price} = req.body

      const produto = {
        name,
        description,
        price,
      }

    try{

        const updateProduto = await Produto.updateOne({_id: id}, produto)

        if(updateProduto.matchedCount===0){
            res.status(422).json({message: 'musica nao encontrada'})
            return
        }
        res.status(200).json(produto)
    }   catch(error){
        res.status(500).json({error: error})

    }

})

// delete

router.delete('/:id', async(req,res)=>{

    const id = req.params.id

    const produto = await Produto.findOne({_id: id})

    if (!produto) {
        res.status(422).json({message: 'O produto não foi encontrado'})
        return
    }

    try {
        await Produto.deleteOne({_id: id})

        res.status(200).json({message: 'produto removido com sucesso'})
    } catch (error) {
        res.status(500).json({error: error})
    }

})


module.exports = router;