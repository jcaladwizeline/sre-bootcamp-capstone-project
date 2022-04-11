const jwt = require("jsonwebtoken");
const config = require("../config").secret;
const models = require("../models");
const { forbidden } = require("../helpers/errors");

exports.auth = async (req, res, next) => {
  const { user: userModel } = models;
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) next(forbidden("a"));
  try {
    const decoded = await jwt.verify(token, config.JWT);
    const user = await userModel.findByPk(decoded.id);
    req.user = user;
  } catch (e) {
    next(forbidden("b"));
  }
  req.token = token;
  next();
};
