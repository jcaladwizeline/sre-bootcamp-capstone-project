const errors = require("../helpers/errors");

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DATABASE_ERROR]: 503,
  [errors.NOT_FOUND_ERROR]: 404,
  [errors.AUTHENTICATION_ERROR]: 401,
  [errors.AUTHORIZATION_ERROR]: 403,
  [errors.BAD_REQUEST]: 400,
};

exports.handle = (error, req, res, next) => {
  if (error.internalCode) res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  else {
    next(error);
    res.status(DEFAULT_STATUS_CODE);
  }
  return res.send({
    message: error.message,
    internal_code: error.internalCode,
  });
};
