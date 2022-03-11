'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        businessId: 1,
        rating: 4,
        review: 'great burgers made by bob',
        imageUrl: 'https://www.pngitem.com/pimgs/m/26-260083_burger-from-bob-s-burgers-png-download-burger.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        businessId: 2,
        rating: 3,
        review: 'Cant believe I paid 20 dollars for this pizza',
        imageUrl: 'https://www.disneytouristblog.com/wp-content/uploads/2012/03/1106300036.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        businessId: 3,
        rating: 2,
        review: 'Every time I come here the same 6 people are taking up all the good seats >:(',
        imageUrl: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        businessId: 2,
        rating: 3,
        review: 'agree with the other reviews',
        imageUrl:'',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
