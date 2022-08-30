const {Router} = require('express')
const NivelController = require('../controllers/NivelController')




const router = Router()


router.get      ('/Niveis',            NivelController.pegaTodosOsNiveis)
router.get      ('/Niveis/:id',        NivelController.pegarNivel)
router.post      ('/Niveis',           NivelController.criaNivel)


module.exports = router