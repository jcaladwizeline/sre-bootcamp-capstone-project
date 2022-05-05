/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["user"] }] */
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = user.password && user.password !== ""
            ? bcrypt.hashSync(user.password, 10)
            : "";
        },
      },
    },
  );
  return User;
};
