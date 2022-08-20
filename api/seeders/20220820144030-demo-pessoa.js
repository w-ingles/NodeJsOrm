'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Pessoas', [
        {
          nome: 'jose da silva',
          ativo: true,
          email: 'jose@gmail.com',
          role: 'docente',
          updatedAt:  new Date(),
          createdAt: new Date(),


        },


      ], {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Pessoas', null, {});

  }
};
