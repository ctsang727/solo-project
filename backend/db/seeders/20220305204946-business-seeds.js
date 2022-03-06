'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Businesses', [
        {
        ownerId: 1,
        title: 'My Restaraunt',
        description: 'This is My Restaurant, not yours. Authentic food.',
        address: "1600 Pennsylvania Avenue",
        city: "Washington DC",
        state: "District of Colombia",
        zipCode: "20001",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        title: 'The Best Restaraunt Ever',
        description: 'The best restaurant ever with the best food and best service no cap',
        address: "11 Wall Street",
        city: "New York",
        state: "New York",
        zipCode: "10118",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        title: 'The Worst Restaraunt of All Time',
        description: 'The worst restaurant ever. Our food is literal garbage!',
        address: "4059 Mt Lee Dr",
        city: "Hollywood",
        state: "California",
        zipCode: "90068",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        title: 'My Second Restaraunt',
        description: 'This is My Second Restaurant, not yours. Authentic food again. For the second time',
        address: "1776 Pennsylvania Avenue",
        city: "Washington DC",
        state: "District of Colombia",
        zipCode: "20001",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('Businesses', null, {});
    
  }
};
