'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'leshy@cabin.org',
        username: 'Leshy',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'grimmy@graveyar.dz',
        username: 'Grimora',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'p03@transcendence.org',
        username: 'P03',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        email: 'magicisreal@wizards101.com',
        username: 'Magnificus',
        hashedPassword: bcrypt.hashSync('password4')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Leshy', 'Grimora', 'P03', 'Magnificus'] }
    }, {});
  }
};
