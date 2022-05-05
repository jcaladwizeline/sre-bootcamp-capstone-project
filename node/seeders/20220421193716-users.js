const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        username: "admin",
        password: bcrypt.hashSync("1234", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "juan",
        password: bcrypt.hashSync("1234", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  // async down(queryInterface, Sequelize) {
  //   /**
  //    * Add commands to revert seed here.
  //    *
  //    * Example:
  //    * await queryInterface.bulkDelete('People', null, {});
  //    */
  // },
};
