'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cards', [
        //userId, name, tribeId, imageUrl, cost, costType, description
        {userId: 1, name: 'Wolf', tribeId: 1, imageUrl: 'https://static.wikia.nocookie.net/inscryption/images/c/c8/Wolf.png/revision/latest?cb=20211025015530', cost: 2, costType:'blood', description:'The Wolf is part of the Canine tribe, it deals 3 damage and has 2 life. It is made available at the start of the game, in Act 1.', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cards', null, {});
  }
};
