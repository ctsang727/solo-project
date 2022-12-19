'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Users'
    return queryInterface.bulkInsert(options, [
      {
        email: 'demo@user.io',
        firstName: 'Demo',
        lastName: 'lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'user1@user.io',
        firstName: 'user',
        lastName: 'one',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        email: 'user2@user.io',
        firstName: 'user',
        lastName: 'two',
        hashedPassword: bcrypt.hashSync('password3')
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    options.tableName = 'Users'
    return queryInterface.bulkDelete(options);
  }
};