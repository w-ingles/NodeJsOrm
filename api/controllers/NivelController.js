const database = require('../models')


class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarNivel(req,res) {

        const {id} = req.params

        try {
            const Nivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(Nivel)

        }catch (e){
            return res.status(500).send(e.message)
        }


    }

}

module.exports = NivelController