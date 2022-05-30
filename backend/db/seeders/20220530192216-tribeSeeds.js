'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tribes', [
        //userId, title, tribeIcon
        {userId: 1, title: 'Canine', tribeIcon: '', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tribes', null, {});
  }
};
