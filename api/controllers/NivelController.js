const database = require('../models')
const Services = require('../services/Services')


const niveisServices = new Services('Niveis')
class NivelController {

    static async pegaTodosOsNiveis(req, res) {
        try {
            const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
            return res.status(200).json(todosOsNiveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarNivel(req, res) {

        const {id} = req.params

        try {
            const Nivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            })

            if (Nivel === null) {
                return res.status(500).send("Não foi possivel encontrar nem uma informação")
            }

            return res.status(200).json(Nivel)

        } catch (e) {

            return res.status(500).send(`Não foi possivel executar sua consulta possivel motivo:  ${e.message}`)
        }


    }

    static async criaNivel(req, res) {
        const novoNivel = req.body

        try {
            const NivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(NivelCriado)

        } catch (e) {
            return res.status(500).send(e.message)
        }

    }

    static async procurandoNivelPorNome(req, res) {
        const parametroDeBusca = req.body.parametro
        console.log(req.body.parametro)
        try {
            const Nivel = await database.Niveis.findOne({where: {descr_nivel: parametroDeBusca}})
            return res.status(200).json(Nivel)

        } catch (e) {
            return res.status(500).send(e.message)
        }

    }


    static async atualizaNivel(req, res) {

        const {id} = req.params
        const novaInformacao = req.body
        try {
            await database.Niveis.update(novaInformacao, {where: {id: Number(id)}})

            const niveistualizada = await database.Niveis.findOne({where: {id: Number(id)}})

            return res.status(200).json(niveistualizada)

        } catch (e) {
            return res.status(500).send(e.message)
        }
    }

    static async deleteNivel(req,res){
        const {id} = req.params
        try {
            await database.Niveis.destroy({where:{id: Number(id)}})

            return res.status(200).json({removido: true})

        }catch (e) {
            return res.status(500).send(e.message)
        }

    }


}

module.exports = NivelController