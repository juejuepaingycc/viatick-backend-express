'use strict';

const temp_data = [1,2].map((daily_id) => {
  let test = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
  .map((time) => {
    return {
      time,
      daily_id
    }
  })
  return test
});

const merged = [...temp_data[0], ...temp_data[1]]
const hourly_data = merged.map((d, index) => ({
  time: d.time,
  daily_id: d.daily_id,
  created_at: new Date(),
  updated_at: new Date(),
  usage: Math.floor(Math.random() * 100)
}));

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER TABLE hourly AUTO_INCREMENT = 1;'
    );

    await queryInterface.bulkInsert('hourly', hourly_data);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('hourly', null);
  },
};
