'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tribe = sequelize.define('Tribe', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    tribeIcon: DataTypes.STRING
  }, {});
  Tribe.associate = function(models) {
    Tribe.belongsTo(models.User, {foreignKey: 'userId' });
    Tribe.hasMany(models.Card, {foreignKey: 'tribeId' });
  };
  return Tribe;
};
