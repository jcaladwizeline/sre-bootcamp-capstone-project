const jwt = require("jsonwebtoken");
const models = require("../models");
const config = require("../config").secret;
const { databaseError, badRequest } = require("../helpers/errors");

exports.login = async (username, password) => {
  const { user } = models;

  try {
    const response = await user.findOne({ where: { username: username } });
    if (response) {
      const { username, password: userPassword, id } = response;
      const passwordValid = await bcrypt.compare(password, userPassword);
      if (passwordValid) {
        const token = jwt.sign({ id, username }, config.JWT);
        return { data: token };
      } else {
        throw badRequest("user or password are incorrect");
      }
    } else {
      throw databaseError("database error");
    }
  } catch (e) {
    throw e;
  }
};

exports.signup = async (username, password) => {
  const { user } = models;

  return user
    .create({ username, password: password })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      throw databaseError("database error");
    });
};
