'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cards', [
        //userId, name, tribeId, imageUrl, cost, costType, description
        {userId: 1, name: 'Wolf', tribeId: 1, imageUrl: 'https://i.imgur.com/NR4pi3i.png', cost: 2, costType:'blood', description:'The Wolf is part of the Canine tribe, it deals 3 damage and has 2 life. It is made available at the start of the game, in Act 1.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, name: 'Squirrel', tribeId: null, imageUrl: 'https://i.imgur.com/HyA9pJ7.png', cost: 0, costType:'blood', description:'Squirrels are a resource card. They are free to play and you may draw one every turn. They sole purpose is in that of utility.', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Cards', null, {});
  }
};
