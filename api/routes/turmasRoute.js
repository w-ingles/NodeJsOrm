const {Router} = require('express')
const TurmasController = require('../controllers/TurmasController')




const router = Router()


router.get      ('/Turmas',        TurmasController.pegaTodasAsTurmas)


module.exports = router