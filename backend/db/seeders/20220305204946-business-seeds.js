'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
      options.tableName = 'Businesses'
      return queryInterface.bulkInsert(options, [
        {
        ownerId: 1,
        title: 'Bobs Burgers',
        description: 'Bob Belcher runs his dream restaurant with his wife and three children as their last hope of holding the family together.',
        address: "1600 Pennsylvania Avenue",
        city: "Washington DC",
        state: "District of Colombia",
        zipCode: "20001",
        imageUrl: "https://www.coaster101.com/wp-content/uploads/2018/03/bobs-burgers-restaurant-3.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 2,
        title: 'Pizza Planet',
        description: 'A literal planet made of pizza',
        address: "11 Wall Street",
        city: "San Francisco",
        state: "CA",
        zipCode: "94016",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Alien_Pizza_Planet_%28Disneyland%29_1.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 3,
        title: 'Central Perk',
        description: 'Central Perk is a coffeehouse in New York on NBC sitcom Friends',
        address: "6 Greenwich Village",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        imageUrl: "https://i.pinimg.com/originals/de/d2/a8/ded2a8e41dcbbb7de2e54a6e9026db76.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ownerId: 1,
        title: 'The Krusty Krab',
        description: 'The Krusty Krab is a fast food restaurant located in Bikini Bottom, founded and owned by Eugene H. Krabs. It is also the most popular restaurant in Bikini Bottom, famous for its Krabby Patty burgers',
        address: "1776 Pennsylvania Avenue",
        city: "Bikini Bottom",
        state: "HI",
        zipCode: "20001",
        imageUrl: "https://cdn.dotit.com/media/magpleasure/mpblog/upload/4/5/459457842264789774e21dfd5ae2740a.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      options.tableName = 'Businesses';
      return queryInterface.bulkDelete(options);
    
  }
};
