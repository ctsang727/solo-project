'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull: false,
      references: {model: 'User'}
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo( models.User, {foreignKey: 'userId'})
  };
  return Photo;
};