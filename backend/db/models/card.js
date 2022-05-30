'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tribeId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    costType: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Card.associate = function(models) {
    Card.belongsTo(models.Tribe, { foreignKey: 'tribeId' });
    Card.belongsTo(models.User, { foreignKey: 'userId' });
    Card.hasMany(models.Comment, { foreignKey: 'cardId' });
  };
  return Card;
};
