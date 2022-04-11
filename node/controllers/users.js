const { login, signup } = require("../services/users");

exports.login = (req, res, next) => {
  const {
    body: { username, password },
  } = req;
  return login(username, password)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(next);
};

exports.signup = (req, res, next) => {
  const {
    body: { username, password },
  } = req;
  return signup(username, password)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch(next);
};
