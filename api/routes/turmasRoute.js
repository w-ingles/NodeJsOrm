const {Router} = require('express')
const TurmasController = require('../controllers/TurmasController')


const router = Router()


router.get      ('/Turmas',              TurmasController.pegaTodasAsTurmas)
router.get      ('/Turmas/:id',          TurmasController.pegarTurma)
router.post     ('/Turmas',              TurmasController.criaTurma)
router.put      ('/Turmas/:id',          TurmasController.atualizaTurma)
router.delete   ('/Turmas/:id',          TurmasController.deleteTurma)


module.exports = router