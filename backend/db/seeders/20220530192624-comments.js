'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      //userId, cardId, comment
      return queryInterface.bulkInsert('Comments', [
        {userId: 1, cardId: 1, comment: 'Meh, I like this card, but it could be better.', createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, cardId: 1, comment: 'This is my favorite card! I do jumping jacks every time I pull it!', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
