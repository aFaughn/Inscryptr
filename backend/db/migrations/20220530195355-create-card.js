'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:"Users",
          key: "id"
         }
      },
      name: {
        type: Sequelize.STRING(25),
        allowNull: false
      },
      tribeId: {
        type: Sequelize.INTEGER,
        references: {
          model:"Tribes",
          key: "id"
        }
      },
      imageUrl: {
        type: Sequelize.STRING(255)
      },
      cost: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      costType: {
        type: Sequelize.STRING(25)
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cards');
  }
};
