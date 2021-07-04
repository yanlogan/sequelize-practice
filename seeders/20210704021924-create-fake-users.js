'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      name: 'John Doe',
      email: 'john@mail.com',
      role: 'user',
      uuid: "1485cac7-28df-4188-9dad-9f73cdf7e170",
      createdAt: "2021-07-03T23:02:54.419Z",
      updatedAt: "2021-07-03T23:02:54.419Z"
    }, {
      name: 'Jane Doe',
      email: 'jane@mail.com',
      role: 'admin',
      uuid: "0005cac7-28df-4188-9dad-9f73cdf7e170",
      createdAt: "2021-07-03T23:02:51.419Z",
      updatedAt: "2021-07-03T23:03:54.419Z"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};