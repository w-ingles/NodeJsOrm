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
}

module.exports = PessoaController