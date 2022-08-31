const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router
.get      ('/pessoas',        PessoaController.buscaTodasPessoas)
.get      ('/pessoas/:id',    PessoaController.buscaPessoa)
.post     ('/pessoas',        PessoaController.criaPessoa)
.put      ('/pessoas/:id',    PessoaController.atualizaPessoa)
.delete   ('/pessoas/:id',    PessoaController.deletePessoa)
.get      ('/pessoas/:estudanteId/matricula/:matriculaId',          PessoaController.buscaUmaMatricula)
.post     ('/pessoas/:estudanteId/matricula',                       PessoaController.criaMatricula)
.put      ('/pessoas/:estudanteId/matricula/:matriculaId',          PessoaController.atualizaMatricula)
.delete      ('/pessoas/:estudanteId/matricula/:matriculaId',       PessoaController.deleteMatricula)

module.exports = router