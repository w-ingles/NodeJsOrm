const {Router} = require('express')
const NivelController = require('../controllers/NivelController')




const router = Router()


router.get      ('/Niveis',              NivelController.pegaTodosOsNiveis)
router.get      ('/Niveis/:nome',        NivelController.procurandoNivelPorNome)
router.get      ('/Niveis/:id',          NivelController.pegarNivel)
router.post     ('/Niveis',              NivelController.criaNivel)
router.put      ('/Niveis/:id',          NivelController.atualizaNivel)
router.delete   ('/Niveis/:id',          NivelController.deleteNivel)




module.exports = router