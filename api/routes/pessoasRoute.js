const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router.get('/Pessoas',PessoaController.buscaTodasPessoas)

module.exports = router