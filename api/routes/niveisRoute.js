const {Router} = require('express')
const NivelController = require('../controllers/NivelController')




const router = Router()


router.get      ('/Niveis',        NivelController.pegaTodosOsNiveis)


module.exports = router