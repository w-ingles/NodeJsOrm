const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router
.get      ('/Pessoas',        PessoaController.buscaTodasPessoas)
.get      ('/Pessoas/:id',    PessoaController.buscaPessoa)
.post     ('/Pessoas',        PessoaController.criaPessoa)
.put      ('/Pessoas/:id',    PessoaController.atualizaPessoa)
.delete   ('/Pessoas/:id',    PessoaController.deletePessoa)

module.exports = router