const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')


const router = Router()


router
.get      ('/pessoas',                                      PessoaController.buscaTodasPessoasAtivas)
.get      ('/pessoas/todas',                                PessoaController.buscaTodasPessoas)
.get      ('/pessoas/:id',                                  PessoaController.buscaPessoa)
.get      ('/pessoas/:estudanteId/matricula',               PessoaController.pegaMatriculas)
.get      ('/pessoas/matricula/:turmaId/confirmadas',       PessoaController.pegaMatriculaPorTurma)
.post     ('/pessoas',                                      PessoaController.criaPessoa)
.put      ('/pessoas/:id',                                  PessoaController.atualizaPessoa)
.delete   ('/pessoas/:id',                                  PessoaController.deletePessoa)
.get      ('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.buscaUmaMatricula)
.post     ('/pessoas/:estudanteId/matricula',                    PessoaController.criaMatricula)
.put      ('/pessoas/:estudanteId/matricula/:matriculaId',       PessoaController.atualizaMatricula)
.delete   ('/pessoas/:estudanteId/matricula/:matriculaId',       PessoaController.deleteMatricula)
.post     ('/pessoas/:id/restaura',                              PessoaController.restauraPessoa)

module.exports = router