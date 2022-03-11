'use strict';
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users'}
    },
    businessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Businesses'}
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review: {
     type: DataTypes.TEXT,
     allowNull: false,
     validate: {
       len: [1, 5000]
     }
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo( models.Business, { foreignKey: 'businessId' })
    Review.belongsTo( models.User, { foreignKey: 'userId' })
  };
  return Review;
};