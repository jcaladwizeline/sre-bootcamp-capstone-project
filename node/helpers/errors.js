const internalError = (message, internalCode) => ({
  message,
  internalCode,
});

exports.DATABASE_ERROR = "database_error";
exports.NOT_FOUND_ERROR = "not_found_error";
exports.FORBIDDEN = "forbidden";
exports.databaseError = (message) =>
  internalError(message, exports.DATABASE_ERROR);
exports.notFound = (message) => internalError(message, exports.NOT_FOUND_ERROR);
exports.forbidden = (message) => internalError(message, exports.FORBIDDEN);
