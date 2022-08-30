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

            if (Nivel === null){
                return res.status(500).send("Não foi possivel encontrar nem uma informação")
            }

            return res.status(200).json(Nivel)

        }catch (e){

            return res.status(500).send(`Não foi possivel executar sua consulta possivel motivo:  ${e.message}`)
        }


    }

    static async criaNivel(req,res) {
        const novoNivel = req.body

        try {
            const NivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(NivelCriado)

        }catch (e){
            return res.status(500).send(e.message)
        }

    }



}

module.exports = NivelController