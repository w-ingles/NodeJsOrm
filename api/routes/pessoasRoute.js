const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router.get('/Pessoas',PessoaController.buscaTodasPessoas)
router.get('/Pessoas/:id',PessoaController.buscaPessoa)

module.exports = router