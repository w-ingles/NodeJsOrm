const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router.get('/Pessoas',PessoaController.buscaTodasPessoas)
router.get('/Pessoas/:id',PessoaController.buscaPessoa)
router.post('/Pessoas',PessoaController.criaPessoa)

module.exports = router