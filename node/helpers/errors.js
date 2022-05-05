const internalError = (message, internalCode) => ({
  message,
  internalCode,
});

exports.DATABASE_ERROR = "database_error";
exports.NOT_FOUND_ERROR = "not_found_error";
exports.AUTHORIZATION_ERROR = "authorization_error";
exports.AUTHENTICATION_ERROR = "authentication_error";
exports.BAD_REQUEST = "bad_request";

exports.databaseError = (message) => internalError(message, exports.DATABASE_ERROR);
exports.notFound = (message) => internalError(message, exports.NOT_FOUND_ERROR);
exports.authorizationError = (message) => internalError(message, exports.AUTHORIZATION_ERROR);
exports.authenticationError = (message) => internalError(message, exports.AUTHENTICATION_ERROR);
exports.badRequest = (message) => internalError(message, exports.BAD_REQUEST);
