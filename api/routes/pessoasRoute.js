const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router
.get      ('/pessoas',        PessoaController.buscaTodasPessoas)
.get      ('/pessoas/:id',    PessoaController.buscaPessoa)
.post     ('/pessoas',        PessoaController.criaPessoa)
.put      ('/pessoas/:id',    PessoaController.atualizaPessoa)
.delete   ('/pessoas/:id',    PessoaController.deletePessoa)
.get      ('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.buscaUmaMatricula)

module.exports = router