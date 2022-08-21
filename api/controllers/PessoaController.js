const database = require('../models')


class PessoaController{
    static async buscaTodasPessoas(req,res){

        try {
            const todasPessoas = await database.Pessoas.findAll()

            return res.status(200).json(todasPessoas)
        }catch (e) {
            return res.status(500).send(e.message)
        }

    }

    static async buscaPessoa(req, res){
        const {id} = req.params

        try {
            const Pessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id)
                }
            })

            return res.status(200).json(Pessoa)

        }catch (e){
            return res.status(500).send(e.message)
        }
    }

    static async criaPessoa(req,res) {
        const novaPessoa = req.body

        try {
            const PessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(PessoaCriada)

        }catch (e){
            return res.status(500).send(e.message)
        }

    }
}

module.exports = PessoaController