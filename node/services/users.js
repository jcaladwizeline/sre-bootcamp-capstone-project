const models = require("../models");
const config = require("../config").secret;
const bcrypt = require("bcrypt");
const { databaseError, badRequest } = require("../helpers/errors");
const jwt = require("jsonwebtoken");

exports.login = async (username, password) => {
  const { user } = models;

  try {
    const response = await user.findOne({ where: { username: username } });
    if (response) {
      const { username, password: userPassword, id } = response;
      const password_valid = await bcrypt.compare(password, userPassword);
      if (password_valid) {
        const token = jwt.sign({ id, username }, config.JWT);
        return { username, token };
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
  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(password, salt);

  return user
    .create({ username, password: passwordHashed })
    .then((data) => {
      return data;
    })
    .catch((e) => {
      throw databaseError("database error");
    });
};
