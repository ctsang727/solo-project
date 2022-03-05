'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        businessId: 1,
        rating: 4,
        answer: 'Really good appetizers and cheap',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        businessId: 2,
        rating: 3,
        answer: 'food was good, service was bad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        businessId: 3,
        rating: 2,
        answer: 'Would not recommend, steak was overcooked',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        businessId: 2,
        rating: 3,
        answer: 'agree with the other reviews, service was bad but food was good.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
