const jwt = require("jsonwebtoken");
const config = require("../config").secret;
const models = require("../models");
const { authenticationError } = require("../helpers/errors");

exports.auth = async (req, res, next) => {
  const { user: userModel } = models;
  let token;
  if (
    req.headers.authorization
    && req.headers.authorization.startsWith("Bearer")
  ) {
    [, token] = req.headers.authorization.split(" ");
  }
  if (!token) next(authenticationError("User is not authorized"));
  try {
    const decoded = await jwt.verify(token, config.JWT);
    const user = await userModel.findByPk(decoded.id);
    req.user = user;
  } catch (e) {
    next(authenticationError("User is not authorized"));
  }
  req.token = token;
  next();
};
