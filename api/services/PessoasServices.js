const Services = require('../services/Services')
const database = require('../models')


class PessoasServices extends Services {


    constructor() {
        super('Pessoas');
    }
    async pegaRegistroAtivos(where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}})
    }

    async pegaTodosOsRegistro(where = {}){
        return database[this.nomeDoModelo].scope('todos').findAll({where: {...where}})
    }
}

module.exports = PessoasServices