/*eslint no-shadow: 2*/
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");
const config = require("../config").secret;
const { databaseError, badRequest } = require("../helpers/errors");

exports.login = async (username, password) => {
  const { user } = models;
  const response = await user.findOne({ where: { username } });
  if (response) {
    const { username: userN, password: userPassword, id } = response;
    const passwordValid = await bcrypt.compare(password, userPassword);
    if (passwordValid) {
      const token = jwt.sign({ id, username: userN }, config.JWT);
      return { data: token };
    }
    throw badRequest("user or password are incorrect");
  }
  throw databaseError("database error");
};

exports.signup = async (username, password) => {
  const { user } = models;

  return user
    .create({ username, password })
    .then((data) => data)
    .catch(() => {
      throw databaseError("database error");
    });
};
