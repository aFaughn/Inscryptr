'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      //userId, cardId, comment
      return queryInterface.bulkInsert('Comments', [
        {userId: 1, cardId: 1, comment: 'This is a seed comment.', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
