const database = require('../models')


class PessoaController{

    static async buscaTodasPessoasAtivas(req,res){

        try {
            const todasPessoasAtivas = await database.Pessoas.findAll()

            return res.status(200).json(todasPessoasAtivas)
        }catch (e) {
            return res.status(500).send(e.message)
        }

    }

    static async buscaTodasPessoas(req,res){

        try {
            const todasPessoas = await database.Pessoas.scope('todos').findAll()

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

    static async atualizaPessoa(req,res) {

        const {id} = req.params
        const novaInformacao = req.body
        try {
            await database.Pessoas.update(novaInformacao,{where:{id: Number(id)}})

            const pessoaAtualizada = await  database.Pessoas.findOne({where:{id: Number(id)}})

            return res.status(200).json(pessoaAtualizada)

        }catch (e) {
            return res.status(500).send(e.message)
        }
    }

    static async deletePessoa(req,res){
        const {id} = req.params
        try {
            await database.Pessoas.destroy({where:{id: Number(id)}})

            return res.status(200).json({removido: true})

        }catch (e) {
            return res.status(500).send(e.message)
        }

    }

    static async restauraPessoa(req,res){
        const { id } = req.params

        try {
            await database.Pessoas.restore({where: {id: Number(id)} })

            res.status(200).json({mensagem: `id ${id} foi restaurado`})
        }catch (e) {
            return res.status(500).json(e.message)
        }

    }

    static async buscaUmaMatricula(req, res){

        const {estudanteId,matriculaId} = req.params

        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)

                }
            })

            return res.status(200).json(umaMatricula)

        }catch (e){
            return res.status(500).send(e.message)
        }
    }

    static async criaMatricula(req,res) {
        const novaPessoa = req.body
        const {estudanteId} = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}

        try {
            const MatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(MatriculaCriada)

        }catch (e){
            return res.status(500).send(e.message)
        }

    }

    static async atualizaMatricula(req,res) {

        console.log("entrouaqui");

        const {estudanteId,matriculaId} = req.params

        const novaInformacao = req.body

        try {
            await database.Matriculas.update(novaInformacao,{

                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)


            }})

            const matriculaAtualizada = await  database.Matriculas.findOne({where:{id: Number(matriculaId)}})

            return res.status(200).json(matriculaAtualizada)

        }catch (e) {
            return res.status(500).send(e.message)
        }

    }

    static async deleteMatricula(req,res){


        const {estudanteId,matriculaId} = req.params

        try {
            await database.Matriculas.destroy({where:{id: Number(matriculaId)}})

            return res.status(200).json({removido: true})

        }catch (e) {
            return res.status(500).send(e.message)
        }

    }

    static async pegaMatriculas(req, res){



        const { estudanteId } = req.params

        try {
            const pessoa = await database.Pessoas.findOne({where: {id: Number(estudanteId)}})

            console.log(pessoa)

            const matriculas = await pessoa.getAulasMatriculadas()

            return res.status(200).json(matriculas)
        }catch (e) {
            return res.status(500).json(e.message)
        }

    }

    static async pegaMatriculaPorTurma(req, res){

        const { turmaId } = req.params

        try {
           const todasAsMatriculas = await database.Matriculas.findAndCountAll({where: {

               turma_id: Number(turmaId),
               status: 'confirmado'

           }})

            return res.status(200).json(todasAsMatriculas)

        }catch (e) {
            return res.status(500).json(e.message)
        }

    }






}

module.exports = PessoaController