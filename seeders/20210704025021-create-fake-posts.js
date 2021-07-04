'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('posts', [{
      title: 'I am John',
      body: 'This is my post',
      uuid: "6745cac7-28df-4188-9dad-9f73cdf7e170",
      userId: "2",
      createdAt: "2021-07-03T23:01:54.419Z",
      updatedAt: "2021-07-03T23:02:57.419Z"
    }, {
      title: 'I am Jane',
      body: 'This is my post',
      uuid: "003425c7-28df-4188-9dad-9f73cdf7e170",
      userId: "1",
      createdAt: "2021-07-03T23:02:51.419Z",
      updatedAt: "2021-07-03T23:02:52.419Z"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
