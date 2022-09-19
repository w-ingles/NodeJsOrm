const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op


class TurmasController{

    static async pegaTodasAsTurmas(req, res) {

        const { data_inicial, data_final} = req.query
        const where = {}

        data_inicial || data_final ? where.data_inicio = {}     : null
        data_inicial ? where.data_inicio[Op.gte] = data_inicial : null
        data_final   ? where.data_inicio[Op.lte] = data_final   : null

        console.log(where)

        try {
            const todasAsTurmas = await database.Turmas.findAll({where})
            return res.status(200).json(todasAsTurmas)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegarTurma(req, res) {

        const {id} = req.params

        try {
            const Turma = await database.Turmas.findOne({
                where: {
                    id: Number(id)
                }
            })

            if (Turma === null) {
                return res.status(500).send("Não foi possivel encontrar nem uma informação")
            }

            return res.status(200).json(Turma)

        } catch (e) {

            return res.status(500).send(`Não foi possivel executar sua consulta possivel motivo:  ${e.message}`)
        }


    }

    static async criaTurma(req, res) {
        const novoNivel = req.body

        try {
            const TurmaCriado = await database.Turmas.create(novoNivel)
            return res.status(200).json(TurmaCriado)

        } catch (e) {
            return res.status(500).send(e.message)
        }

    }


    static async atualizaTurma(req, res) {

        const {id} = req.params
        const novaInformacao = req.body
        try {
            await database.Turmas.update(novaInformacao, {where: {id: Number(id)}})

            const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})

            return res.status(200).json(turmaAtualizada)

        } catch (e) {
            return res.status(500).send(e.message)
        }
    }

    static async deleteTurma(req,res){
        const {id} = req.params
        try {
            await database.Turmas.destroy({where:{id: Number(id)}})

            return res.status(200).json({removido: true})

        }catch (e) {
            return res.status(500).send(e.message)
        }

    }

}

module.exports = TurmasController