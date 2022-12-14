'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {foreignKey: 'docente_id'})
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: {status: 'confirmado'},
        as: 'aulasMatriculadas'


      })
    }
  }
  Pessoas.init({
    nome:  {
      type: DataTypes.STRING,
      validate: {
        funtionValida: (dado) => {
          if (dado.length < 3){
              throw new Error('O campo nome tem que possuir mais de 3 caracteres')
          }
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {

        isEmail: {
          args: true,
          msg: "E-mail não é valido"
        }

      }
    },
    role:  DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pessoas',
    paranoid:  true,
    defaultScope: {
      where: { ativo: true}
    },
    scopes: {
      todos: {where: {}},

    }
  });
  return Pessoas;
};