'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Tribes', [
        //userId, title, tribeIcon
        {userId: 1, title: 'Canine', tribeIcon: 'https://i.imgur.com/IMzQf8k.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, title: 'Avian', tribeIcon: 'https://i.imgur.com/8duW2EX.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, title: 'Reptile', tribeIcon: 'https://i.imgur.com/pYcvjCg.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, title: 'Insect', tribeIcon: 'https://i.imgur.com/PvCdJvk.png', createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, title: 'No Tribe', tribeIcon: 'https://i.imgur.com/N6VFFWa.png', createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tribes', null, {});
  }
};
