'use strict';

let today = new Date()
let todayDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

let yesterday = new Date((new Date()).valueOf() - 1000*3600*24);
let prevDate = yesterday.getFullYear() + "-" + (yesterday.getMonth() + 1) + "-" + yesterday.getDate();

const daily_data = [todayDate, prevDate].map((date) => ({
  date,
  created_at: new Date(),
  updated_at: new Date()
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE daily AUTO_INCREMENT = 1;'
    );
    await queryInterface.bulkInsert('daily', daily_data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('daily', null);
  },
};
